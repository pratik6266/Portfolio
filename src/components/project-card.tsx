"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown"
import { motion } from "framer-motion"

interface Props {
  title: string
  href?: string
  description: string
  dates: string
  tags: readonly string[]
  link?: string
  image?: string
  video?: string
  links?: readonly {
    icon: React.ReactNode
    type: string
    href: string
  }[]
  className?: string
}

export function ProjectCard({ title, href, description, dates, tags, link, image, video, links, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card
        className={
          "relative flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
        }
      >
        <Link href={href || "#"} className={cn("block cursor-pointer", className)}>
          {video && (
            <motion.video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
          {image && (
            <motion.div
              className="overflow-hidden"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={500}
                height={300}
                className="h-40 w-full object-cover object-top transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          )}
        </Link>

        <CardHeader className="px-2">
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <motion.time
              className="font-sans text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {dates}
            </motion.time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                {description}
              </Markdown>
            </motion.div>
          </motion.div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <motion.div
              className="mt-2 flex flex-wrap gap-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {tags?.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Badge
                    className="px-1 py-0 text-[10px] transition-colors duration-200 hover:bg-primary/20"
                    variant="secondary"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <motion.div
              className="flex flex-row flex-wrap items-start gap-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              {links?.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.8 + idx * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link target="_blank" href={link?.href}>
                    <Badge className="flex gap-2 px-2 py-1 text-[10px] transition-all duration-200 hover:shadow-sm">
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
