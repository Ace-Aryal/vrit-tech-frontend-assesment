// reuable outermost component for the  task-2 layout
"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import InnerContainer from "./inner-container";
type OuterConatinerProps = {
  className: string;
  heading: string;
  subHeading: string;
  imagePosition: "left" | "right";
  paragraph: string;
  svg: React.ReactNode;
};
function OuterConatiner({
  className,
  heading,
  subHeading,
  imagePosition = "left",
  paragraph,
  svg,
}: OuterConatinerProps) {
  return (
    <div className="relative aspect-[592/351] ">
      <motion.div
        initial={{
          opacity: 1,
          x: 0,
        }}
        whileHover={{
          opacity: 0,
          x: -2000,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className={cn(
          `relative    h-full w-full
           py-[58px] bg-red-500 rounded-3xl flex flex-col gap-4 text-white px-[35px] `,
          className,
          {
            "text-left ": imagePosition === "right",
            "text-right": imagePosition === "left",
          }
        )}
      >
        <h3 className="text-3xl  font-bold whitespace-nowrap">{heading}</h3>
        <h4 className=" text-xl font-semibold ">{subHeading}</h4>

        <div className="flex">
          {/* svg overlay */}
          <div
            className={cn("w-2/5 relative ", {
              "order-1": imagePosition === "right",
            })}
          >
            {" "}
            <div
              className={cn(
                "absolute z-10  -bottom-36 animate-vertical-marquee",
                {
                  "-left-32": imagePosition === "left",
                  "-right-20": imagePosition === "right",
                }
              )}
            >
              {svg}
            </div>
          </div>
          <div className="w-3/5">
            <p className="mt-2">{paragraph}</p>
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-0 -z-10">
        <InnerContainer />
      </div>
    </div>
  );
}

export default OuterConatiner;
