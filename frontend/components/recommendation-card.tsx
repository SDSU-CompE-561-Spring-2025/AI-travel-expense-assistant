import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface RecommendationCardProps {
  title: string
  description: string
  imageUrl: string
  rating: number
}

export default function RecommendationCard({ title, description, imageUrl, rating = 4.5 }: RecommendationCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-40 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : i < rating
                    ? "text-yellow-400 fill-yellow-400 opacity-50"
                    : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
      </CardFooter>
    </Card>
  )
}
