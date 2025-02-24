"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Folder } from "lucide-react"

interface BookmarkFolder {
  id: string
  name: string
}

const folders: BookmarkFolder[] = [
  { id: "1", name: "Bookmarks bar" },
  { id: "2", name: "Other bookmarks" },
]

export default function Bookmarks() {
  return (
    <Card className="bg-[#0D1117]/50 border-[#1D2230] h-full flex flex-col">
      <CardHeader className="py-3 md:py-4">
        <CardTitle className="text-sm font-medium text-purple-400">Bookmarks</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        <div className="space-y-1">
          {folders.map((folder) => (
            <Button
              key={folder.id}
              variant="ghost"
              className="w-full justify-start gap-2 text-purple-300/70 hover:text-purple-200 hover:bg-purple-500/10"
            >
              <Folder className="h-4 w-4" />
              {folder.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

