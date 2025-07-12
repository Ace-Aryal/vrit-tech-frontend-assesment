// resuable component for displaying all animated testimonial images and stickers

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
type TestimonialImageProps = {
  src: string;
  className?: string;
  isHovering?: boolean;
  shouldAnimate?: boolean;
  isAnimationTopDown?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLImageElement>;

function TestimonialImage({
  src,
  className,
  isHovering,
  shouldAnimate,
  isAnimationTopDown,
  children = null,
  ...props
}: TestimonialImageProps) {
  return (
    <motion.div
      animate={{
        y:
          shouldAnimate && isHovering && isAnimationTopDown
            ? ["-30%", "0%", "30%", "0%", "-30%"]
            : isHovering && shouldAnimate
            ? ["0%", "-30%", "0%", "30%", "0%"]
            : [],
      }}
      transition={{
        duration: 8,
        ease: "linear",
        repeat: Infinity,
        delay: 0.7,
      }}
      className={cn("bg-white rounded-3xl object-cover ", className)}
    >
      <img src={src} className="w-25 h-25  p-1 rounded-3xl" {...props} />
      {children}
    </motion.div>
  );
}

export default TestimonialImage;
