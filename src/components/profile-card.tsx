"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { JSX } from "react"

interface Prop {
  title: string
  href?: string
  icon: JSX.Element
  description: string[]
  tags: readonly string[]
  link?: string
  image?: string
  iconClassName?: string
}

export function ProfileCard({ title, href, icon, description, tags, image, iconClassName }: Prop) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Card className="relative flex flex-col group overflow-hidden border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 ease-out h-full bg-background/80 backdrop-blur-sm hover:bg-background">
        <CardHeader className="px-4 pt-4 pb-3">
          <div className="space-y-3">
            {/* Header with circular image and title */}
            <div className="flex items-center gap-3">
              {image && (
                <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/40 transition-all duration-300">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-background" />
                </motion.div>
              )}

              <div className="flex-1 min-w-0 flex items-center gap-2">
                <motion.div whileHover={{ x: 1 }} transition={{ duration: 0.2 }} className="flex-1">
                  <CardTitle className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {title}
                  </CardTitle>
                </motion.div>

                {/* Small link icon next to title */}
                {href && (
                  <Link href={href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="p-1.5 rounded-full bg-muted/60 hover:bg-primary/10 border border-border/40 hover:border-primary/30 transition-all duration-200"
                    >
                      <ExternalLink className="w-3 h-3 text-muted-foreground hover:text-primary transition-colors duration-200" />
                    </motion.div>
                  </Link>
                )}
              </div>
            </div>

            {/* Description as bullet points */}
            {description && description.length > 0 && (
              <div className="space-y-1.5">
                <ul className="space-y-1.5">
                  {description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      className="flex items-start gap-2.5 text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-4 pb-4">
          {/* Tech stack horizontally */}
          {tags && tags.length > 0 && (
            <motion.div
              className="pt-3 border-t border-border/40"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 4).map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                    }}
                  >
                    <Badge
                      className="px-2.5 py-0.5 text-[10px] font-medium bg-secondary/60 text-secondary-foreground hover:bg-primary/10 hover:text-primary border border-border/30 hover:border-primary/40 transition-all duration-200 cursor-pointer"
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
                {tags.length > 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                  >
                    <Badge
                      className="px-2.5 py-0.5 text-[10px] bg-muted/60 text-muted-foreground border border-border/30"
                      variant="outline"
                    >
                      +{tags.length - 4}
                    </Badge>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </CardContent>

        {/* Subtle hover effect */}
        <motion.div
          className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </Card>
    </motion.div>
  )
}

// Timeline Layout Component
export function ProfileTimeline({
  profiles,
  BlurFade,
  BLUR_FADE_DELAY,
}: {
  profiles: Array<{
    title: string
    href?: string
    icon: JSX.Element
    description: string[]
    technologies: readonly string[]
    image?: string
    iconClassName?: string
  }>
  BlurFade: React.ComponentType<{ children: React.ReactNode; delay: number }>
  BLUR_FADE_DELAY: number
}) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Clean Timeline Line */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border/60 hidden md:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Timeline Items */}
      <div className="space-y-8 md:space-y-12">
        {profiles.map((profile, index) => {
          const isEven = index % 2 === 0

          return (
            <div key={profile.title} className="relative">
              {/* Simple Timeline Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ delay: BLUR_FADE_DELAY * 12 + index * 0.1, duration: 0.3 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm z-10 hidden md:block cursor-pointer hover:shadow-md transition-shadow duration-200"
              />

              {/* Card Container */}
              <div className={cn("flex items-center", "md:grid md:grid-cols-2 md:gap-6")}>
                {/* Left Side */}
                <div className={cn("w-full", isEven ? "md:order-1" : "md:order-2")}>
                  <BlurFade delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? -20 : 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: BLUR_FADE_DELAY * 12 + index * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className={cn("relative", isEven ? "md:pr-6" : "md:pl-6")}
                    >
                      {/* Connection Line to Timeline */}
                      <motion.div
                        className={cn(
                          "absolute top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-border/40 hidden md:block",
                          isEven ? "right-0" : "left-0",
                        )}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: BLUR_FADE_DELAY * 12 + index * 0.15, duration: 0.3 }}
                      />

                      <ProfileCard
                        href={profile.href}
                        icon={profile.icon}
                        iconClassName={profile.iconClassName}
                        title={profile.title}
                        description={profile.description}
                        tags={profile.technologies}
                        image={profile.image}
                      />
                    </motion.div>
                  </BlurFade>
                </div>

                {/* Right Side (Empty for spacing on desktop) */}
                <div className={cn("hidden md:block", isEven ? "md:order-2" : "md:order-1")} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
