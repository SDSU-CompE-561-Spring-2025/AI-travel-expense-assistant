"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, CalendarIcon } from "lucide-react"


interface Event {
  id: number;            
  title: string;
  start: Date;
  end: Date;
  color: string;
}

interface MonthCalendarProps {
  month: Date
  events: Event[]
  onDateSelect: (date: Date) => void
  selectedDate: Date | null
  expanded: boolean
  onToggleExpand: () => void
}

export function MonthCalendar({
  month,
  events,
  onDateSelect,
  selectedDate,
  expanded,
  onToggleExpand,
}: MonthCalendarProps) {
  const monthYear = month.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  const currentMonth = month.getMonth()
  const currentYear = month.getFullYear()

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const dayOfWeek = firstDayOfMonth.getDay()

  // Get the number of days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Days of the week
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  // TODO: Check if a date has events
  const hasEvents = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    return events.some((event) => {
      const start = new Date(event.start);
      const end = new Date(event.end);
      return date >= start && date <= end;
    })
  }
    

  // TODO: Get events for a specific day
  const getEventsForDay = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    return events
      .filter((event) => {
        const start = new Date(event.start);
        const end = new Date(event.end);
        return date >= start && date <= end;
        })
      .map((event) => {
        const isStart = date.toDateString() === new Date(event.start).toDateString();
        const isEnd = date.toDateString() === new Date(event.end).toDateString();
        return {...event, isStart, isEnd};
      });

    }

  // Check if a date is today
  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
  }

  // Check if a date is selected
  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    )
  }

  // Generate calendar grid
  const renderCalendarDays = () => {
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < dayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 md:h-10"></div>)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(day)
      days.push(
        <button
  key={day}
  onClick={() => onDateSelect(new Date(currentYear, currentMonth, day))}
  className={cn(
    "relative h-12 w-12 md:h-14 md:w-14 flex items-center justify-center text-sm hover:bg-slate-100 transition-colors rounded-md",
    isToday(day) && "font-bold text-blue-600",
    isSelected(day) && "bg-blue-100 hover:bg-blue-200",
    expanded ? "h-12 w-12" : ""
  )}
>
  {day}
  {dayEvents.map((event, i) => (
    <div
    key={i}
    className={cn(
      "absolute top-1 left-0 right-0 h-2 z-10",
      event.color,
      event.isStart && "rounded-l-full pl-1",
      event.isEnd && "rounded-r-full pr-1",
      !event.isStart && !event.isEnd && "px-1"
    )}
  />
  
  ))}
</button>,
      )
    }

    return days
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" />
          <h3 className="font-medium text-slate-800">{monthYear}</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={onToggleExpand} className="h-8 w-8 p-0">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          <span className="sr-only">
            {expanded ? "Collapse" : "Expand"} {monthYear}
          </span>
        </Button>
      </div>

      <div className={cn("grid grid-cols-7 gap-1", expanded && "gap-2")}>
        {/* Days of week headers */}
        {daysOfWeek.map((day) => (
          <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-slate-500">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {renderCalendarDays()}
      </div>

      {expanded && (
  <div className="mt-4 pt-3 border-t border-slate-200">
    <h4 className="text-sm font-medium text-slate-700 mb-2">Trips this month:</h4>
    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
      {events
        .filter(
          (event) =>
            event.start.getFullYear() <= month.getFullYear() &&
            event.end.getFullYear() >= month.getFullYear() &&
            event.start.getMonth() <= month.getMonth() &&
            event.end.getMonth() >= month.getMonth()
        )
        .map((event) => (
          <div
            key={event.id}
            className="flex items-center p-2 text-sm rounded bg-slate-50 hover:bg-slate-100 cursor-pointer"
            onClick={() => onDateSelect(event.start)}
          >
            <div className={`w-2 h-2 rounded-full ${event.color} mr-2`} />
            <div>
              <span className="font-medium">{event.title}</span>
              <span className="text-slate-500 ml-2">
                {event.start.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                -{" "}
                {event.end.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      {events.filter(
        (event) =>
          event.start.getFullYear() <= month.getFullYear() &&
          event.end.getFullYear() >= month.getFullYear() &&
          event.start.getMonth() <= month.getMonth() &&
          event.end.getMonth() >= month.getMonth()
      ).length === 0 && (
        <p className="text-sm text-slate-500 italic">No trips this month</p>
      )}
    </div>
  </div>
)}

    </div>
  )
}
export {TravelCalendar} from "../travel-calendar"