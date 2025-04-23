import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface RecommendationCardProps {
  title: string
  description: string
}

export default function RecommendationCard({ title, description}: RecommendationCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
        <CardHeader className="p-4 pb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
            <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
        </CardContent>
    </Card>
  )
}
