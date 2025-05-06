import { google } from "@ai-sdk/google"
import { generateText } from "ai"

export const runtime = "edge"
export const maxDuration = 30

export async function POST(req: Request) {
    console.log("🔁 Received request to /api/recommendations")

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        console.log("missing API key")
        return new Response("Missing API key", { status: 500 })
    }

    try {
    const { messages } = await req.json()

    // Extract the destination from the last user message
    const lastUserMessage = messages.findLast((m: any) => m.role === "user")
    const destination = lastUserMessage?.content || ""

    // Create a system prompt that instructs the AI to return structured data
    const systemPrompt = `
        You are a travel recommendation assistant. When given a destination, provide the top 5 recommended places to visit.
        Return your response as a JSON array with exactly 5 items. Each item should have the following structure:
        {
            "name": "Place Name",
            "description": "A brief 1-2 sentence description of the place"
        }
        Return only raw JSON, no markdown, no explanation.
    `

    // Create a prompt that asks for recommendations for the specified destination
    const prompt = `Give me the top 5 recommended places to visit in ${destination}`

    const result = await generateText({
        model: google.chat("models/gemini-2.0-flash"),
        //apiKey: process.env.GOOGLE_API_KEY,
        system: systemPrompt,
        messages: [{ role: "user", content: prompt }],
    })

    //const response = result.text
    //console.log("✅ API result:", response)
    //return toChatResponse(result)
    console.log("✅ Returning Gemini response:", result.text)
    
    
    return Response.json({
        id: crypto.randomUUID(),
        role: "assistant",
        content: result.text,
    })

    //return result.toDataStreamResponse()
    } catch (err) {
        console.error("❌ Error in recommendations route:", err)
        return new Response("Internal Server Error", { status: 500 })
    }
}
