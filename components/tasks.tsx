"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tasks() {
  return (
    <Card className="bg-[#0D1117]/50 border-[#1D2230] h-full flex flex-col">
      <CardHeader className="py-3 md:py-4">
        <CardTitle className="text-sm font-medium text-emerald-400">Tasks</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-0">
        <iframe
          src="https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          frameBorder="0"
          className="rounded-b-lg"
        />
      </CardContent>
    </Card>
  )
}

