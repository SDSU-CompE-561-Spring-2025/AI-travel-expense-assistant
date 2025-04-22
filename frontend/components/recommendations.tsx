"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from "react"
import { useEffect } from 'react'
import { useChat } from "@ai-sdk/react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import RecommendationCard from "./recommendation-card"


export default function RecommendationsPage() {
    const [destination, setDestination] = useState("")
    const [recommendations, setRecommendations] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])
  
    const { messages, input, handleInputChange, handleSubmit, setInput } = useChat({
      api: "/api/recommendations",
      onFinish: (message) => {
        setIsLoading(false)
        try {
          // Parse the recommendations from the AI response
          const parsedData = JSON.parse(message.content)
          if (Array.isArray(parsedData) && parsedData.length > 0) {
            setRecommendations(parsedData)
          }
        } catch (error) {
          console.error("Failed to parse recommendations:", error)
        }
      },
    })
  
    const handleDestinationSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!destination.trim()) return
  
      setIsLoading(true)
      setInput(destination)
      handleSubmit(e)
  
      // Add user message to chat
      const prompt = `Give me the top 3 recommended places to visit in ${destination}`
      setInput(prompt)
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
                        <h2 className="text-2xl font-semibold">Top Recommendations for {destination}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {recommendations.map((rec, index) => (
                                <RecommendationCard
                                    key={index}
                                    title={rec.name}
                                    description={rec.description}
                                    imageUrl={rec.imageUrl || `/placeholder.svg?height=200&width=300`}
                                    rating={rec.rating}
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
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Travel Assistant</CardTitle>
                        <CardDescription>Ask for recommendations for any destination</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
                            {hasMounted && messages.map((message) => (
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
