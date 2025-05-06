"use client"

import React from "react"
import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { v4 as uuidv4 } from "uuid";
import RecommendationCard from "./recommendation-card"


export default function RecommendationsPage() {
    const [destination, setDestination] = useState("")
    const [recommendations, setRecommendations] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState<any[]>([])
    const [destinationSnapshot, setDestinationSnapshot] = useState("")
   

    const handleDestinationSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!destination.trim()) return
    
        setIsLoading(true)

        // Safely snapshot the current destination
        setDestinationSnapshot(destination)

        // Clear input immediately for UX
        setDestination("")

        // Add user message immediately
        setMessages((prev) => [
            ...prev,
            { id: uuidv4(), role: "user", content: destination }
        ])
    
        try {
          const response = await fetch("/api/recommendations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: [{ role: "user", content: destination }],
            }),
          })
    
          const data = await response.json()
          console.log("✅ API response:", data)
    
          if (data && data.content) {
            const cleaned = data.content
              .replace(/^```json\s*/, "")
              .replace(/```$/, "")
              .trim()
    
            const parsed = JSON.parse(cleaned)
            console.log("✅ Parsed recommendations:", parsed)
    
            if (Array.isArray(parsed)) {
              setRecommendations(parsed)
            } else {
              console.warn("⚠️ Unexpected response format:", parsed)
            }
          }
        } catch (err) {
          console.error("❌ Failed to get recommendations:", err)
        } finally {
          setIsLoading(false)
        }
      }
    
    return (
        <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Travel Recommendations</h1>
            <p className="text-gray-500 mb-8">Discover the best places to visit at your next destination</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                {recommendations.length > 0 ? (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Top Recommendations for {destinationSnapshot}</h2>
                        <div className="flex flex-col gap-4">
                            {recommendations.map((rec, index) => (
                                <RecommendationCard
                                    key={index}
                                    title={rec.name}
                                    description={rec.description}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
                        <div className="text-center p-6">
                            <h3 className="text-xl font-medium mb-2">No recommendations yet</h3>
                            <p className="text-gray-500">
                                Use the chat assistant to get personalized recommendations for your next trip
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Travel Buddy Assistant</CardTitle>
                        <CardDescription>Ask for recommendations for any destination (region, city, county, etc)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[320px] overflow-y-auto mb-4 space-y-4">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] rounded-lg p-3 ${ message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Separator className="my-4" />

                        <form onSubmit={handleDestinationSubmit} className="flex gap-2">
                            <Input
                                placeholder="Where are you traveling to?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="flex-1"
                            />
                            <Button type="submit" disabled={isLoading}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </main>
    )
}
export {RecommendationsPage}
