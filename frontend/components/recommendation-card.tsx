import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface RecommendationCardProps {
  title: string
  description: string
}

export default function RecommendationCard({ title, description}: RecommendationCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col gap-1 p-3">
        <CardHeader className="p-5 pb-1">
            <h3 className="font-semibold text-lg mb-0.1">{title}</h3>
        </CardHeader>
        <CardContent className="p-5 pt-0 flex-grow">
            <p className="text-sm text-gray-500 leading-tight line-clamp-3">{description}</p>
        </CardContent>
    </Card>
  )
}
