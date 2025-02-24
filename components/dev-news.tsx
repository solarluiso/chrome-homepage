"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsItem {
  id: string
  title: string
  url: string
}

const news: NewsItem[] = [
  {
    id: "1",
    title: "PostgreSQL 17 delivers a leap forward for open-source databases",
    url: "#",
  },
  {
    id: "2",
    title: "Safe Coding: Google's strategy reduces memory safety vulnerabilities",
    url: "#",
  },
  {
    id: "3",
    title: "GitHub begins offering data residency to EU developers",
    url: "#",
  },
]

export default function DevNews() {
  return (
    <Card className="bg-[#0D1117]/50 border-[#1D2230] h-full flex flex-col">
      <CardHeader className="py-3 md:py-4">
        <CardTitle className="text-sm font-medium text-orange-400">Developer News</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        <div className="space-y-2">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="block py-2 px-3 rounded-md hover:bg-[#1D2230] transition-colors group"
            >
              <h3 className="text-sm text-orange-300 group-hover:text-orange-200">{item.title}</h3>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

