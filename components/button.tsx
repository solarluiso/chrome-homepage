"use client"

import * as React from "react"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

export const Button = forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-zinc-900 text-zinc-100 hover:bg-zinc-700",
          variant === "ghost" && "bg-transparent hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100",
          size === "default" && "px-4 py-2",
          size === "icon" && "h-8 w-8",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

