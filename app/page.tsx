import WebApps from "@/components/web-apps"
import Calendar from "@/components/calendar"
import DevNews from "@/components/dev-news"
import Bookmarks from "@/components/bookmarks"
import Tasks from "@/components/tasks"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0C14] text-[#E2E8F0] p-4 md:p-6 flex items-stretch">
      <main className="w-full max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 grid grid-rows-3 gap-4 md:gap-6">
          <WebApps />
          <Calendar />
          <DevNews />
        </div>
        <div className="grid grid-rows-2 gap-4 md:gap-6">
          <Bookmarks />
          <Tasks />
        </div>
      </main>
    </div>
  )
}

