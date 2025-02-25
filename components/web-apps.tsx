"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WebApp {
  id: string;
  title: string;
  url: string;
  icon: string;
}

const defaultApps: WebApp[] = [
  {
    id: "1",
    title: "GitHub",
    url: "https://github.com",
    icon: "https://github.com/favicon.ico",
  },
  {
    id: "2",
    title: "Gmail",
    url: "https://mail.google.com",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
  },
  {
    id: "3",
    title: "Amazon",
    url: "https://amazon.com",
    icon: "https://www.amazon.com/favicon.ico",
  },
  {
    id: "4",
    title: "Drive",
    url: "https://drive.google.com",
    icon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png",
  },
];

export default function WebApps() {
  const [apps, setApps] = useState<WebApp[]>(defaultApps);
  const [showForm, setShowForm] = useState(false);
  const [newApp, setNewApp] = useState<Partial<WebApp>>({ title: "", url: "" });

  const handleAddApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (newApp.title && newApp.url) {
      const icon = new URL(newApp.url).origin + "/favicon.ico";
      setApps([
        ...apps,
        { ...newApp, id: Date.now().toString(), icon } as WebApp,
      ]);
      setNewApp({ title: "", url: "" });
      setShowForm(false);
    }
  };

  const handleRemoveApp = (id: string) => {
    setApps(apps.filter((app) => app.id !== id));
  };

  return (
    <Card className="bg-[#0D1117]/50 border-[#1D2230] h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between py-3 md:py-4">
        <CardTitle className="text-sm font-medium text-emerald-400">
          Web Apps
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {apps.map((app) => (
            <div key={app.id} className="group relative">
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 w-16"
              >
                <div className="relative w-10 h-10 rounded-full bg-gray-800 group-hover:ring-2 group-hover:ring-emerald-500/50 transition-all flex items-center justify-center">
                  <Image
                    src={app.icon || "/placeholder.svg"}
                    alt={app.title}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span className="text-xs text-center text-emerald-300/80 group-hover:text-emerald-300">
                  {app.title}
                </span>
              </a>
              <button
                onClick={() => handleRemoveApp(app.id)}
                className="absolute -top-1 -right-1 bg-red-500 rounded-full p-0.5 hidden group-hover:block"
              >
                <X size={12} />
              </button>
            </div>
          ))}
          <button
            onClick={() => setShowForm(true)}
            className="flex flex-col items-center gap-2 w-16 opacity-60 hover:opacity-100 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full border-2 border-dashed border-emerald-500/30 hover:border-emerald-500/50 flex items-center justify-center">
              <Plus className="w-5 h-5 text-emerald-400" />
            </div>
          </button>
        </div>
        {showForm && (
          <form onSubmit={handleAddApp} className="mt-4 space-y-2">
            <Input
              type="text"
              placeholder="App Name"
              value={newApp.title}
              onChange={(e) => setNewApp({ ...newApp, title: e.target.value })}
              required
            />
            <Input
              type="url"
              placeholder="App URL"
              value={newApp.url}
              onChange={(e) => setNewApp({ ...newApp, url: e.target.value })}
              required
            />
            <div className="flex gap-2">
              <Button type="submit">Add</Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
