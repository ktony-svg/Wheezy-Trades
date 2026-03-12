"use client"

import React from "react"
import { BookOpen, CandlestickChart, GraduationCap, Play, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

type OrbitItem = {
  Icon: React.ComponentType<{ className?: string }>
  label: string
}

type SpinningLogosProps = {
  className?: string
  items?: OrbitItem[]
  centerLabel?: string
  radius?: number
}

export const SpinningLogos: React.FC<SpinningLogosProps> = ({
  className,
  items = [
    { Icon: Play, label: "MODELS" },
    { Icon: CandlestickChart, label: "LIVE TRADES" },
    { Icon: GraduationCap, label: "MENTORSHIP" },
    { Icon: BookOpen, label: "FOUNDATION" },
    { Icon: Trophy, label: "MASTERY" },
  ],
  centerLabel = "",
  radius = 160,
}) => {
  const iconWrapperWidth = 62
  const ringPadding = 56

  const toRadians = (degrees: number): number => (Math.PI / 180) * degrees

  return (
    <div className={cn("flex justify-center items-center w-full overflow-hidden", className)}>
      <div
        style={{
          width: radius * 2 + iconWrapperWidth + ringPadding,
          height: radius * 2 + iconWrapperWidth + ringPadding,
        }}
        className="relative rounded-full"
      >
        {/* Rings */}
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-[12%] rounded-full border border-white/10" />
        <div className="absolute inset-[24%] rounded-full border border-white/5" />

        <div className="absolute inset-0 animate-spin-slow">
          {items.map((item, index) => {
            const angle = (360 / items.length) * index
            return (
              <div
                key={index}
                style={{
                  top: `calc(50% - ${iconWrapperWidth / 2}px + ${radius * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconWrapperWidth / 2}px + ${radius * Math.cos(toRadians(angle))}px)`,
                  width: iconWrapperWidth,
                  height: iconWrapperWidth,
                }}
                className={cn(
                  "absolute flex flex-col items-center justify-center gap-2 rounded-full",
                  "bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
                  "animate-spin-reverse",
                )}
                aria-label={item.label}
              >
                <item.Icon className="w-6 h-6 text-white/70" />
                <span className="text-[10px] tracking-[0.25em] text-white/50 leading-none">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full w-[34%] h-[34%] bg-[#0b1020]/60 border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.15)] flex items-center justify-center">
            <div className="w-[62%] h-[62%] rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/30 blur-sm" />
            <div className="absolute w-3 h-3 rounded-full bg-white/80" />
            {centerLabel ? (
              <span className="absolute text-xs tracking-[0.25em] text-white/60">
                {centerLabel}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

