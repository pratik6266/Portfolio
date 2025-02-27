"use client"

import React, { ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltProps {
  children: ReactNode
  scale?: number
  rotationIntensity?: number
  borderRadius?: number
  perspective?: number
  className?: string
  glareEnable?: boolean
  glareMaxOpacity?: number
  glareColor?: string
  glarePosition?: "all" | "top" | "right" | "bottom" | "left"
  glareBorderRadius?: number
}

export function Tilt({
  children,
  scale = 1.05,
  rotationIntensity = 15,
  borderRadius = 8,
  perspective = 500,
  className = "",
  glareEnable = false,
  glareMaxOpacity = 0.5,
  glareColor = "#ffffff",
  glarePosition = "all",
  glareBorderRadius = 8,
}: TiltProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [rotationIntensity, -rotationIntensity]
  )
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-rotationIntensity, rotationIntensity]
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    
    // Calculate mouse position relative to the element (values between -0.5 and 0.5)
    const xPos = (e.clientX - rect.left) / rect.width - 0.5
    const yPos = (e.clientY - rect.top) / rect.height - 0.5
    
    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Calculate glare position based on mouse position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"])
  
  // Calculate glare opacity based on mouse distance from center
  const glareOpacity = useTransform(
    [mouseXSpring, mouseYSpring],
    ([latestX, latestY]) => {
      const distance = Math.sqrt((latestX as number) * (latestX as number) + (latestY as number) * (latestY as number))
      return Math.min(distance * 2 * glareMaxOpacity, glareMaxOpacity)
    }
  )

  // Determine if we should show glare based on position setting
  const shouldShowGlare = (xVal: number, yVal: number) => {
    if (glarePosition === "all") return true
    if (glarePosition === "top" && yVal < 0) return true
    if (glarePosition === "right" && xVal > 0) return true
    if (glarePosition === "bottom" && yVal > 0) return true
    if (glarePosition === "left" && xVal < 0) return true
    return false
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d",
        borderRadius: borderRadius,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: 1,
      }}
      whileHover={{
        scale: scale,
      }}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
          borderRadius: borderRadius,
        }}
        className="w-full h-full"
      >
        {children}
        
        {/* Glare effect */}
        {glareEnable && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, ${glareColor} 0%, transparent 80%)`,
              opacity: glareOpacity,
              borderRadius: `${glareBorderRadius}px`,
              display: shouldShowGlare(x.get(), y.get()) ? "block" : "none",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
