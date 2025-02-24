"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Calendar() {
  return (
    <Card className="bg-[#0D1117]/50 border-[#1D2230] h-full flex flex-col">
      <CardHeader className="py-3 md:py-4">
        <CardTitle className="text-sm font-medium text-purple-400">Calendar</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-0">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=local&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=AGENDA"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          className="rounded-b-lg"
        />
      </CardContent>
    </Card>
  )
}

