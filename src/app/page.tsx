"use client";
import TestimonialImage from "@/components/atoms/testimonials-image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";
import { animate } from "motion";
import Link from "next/link";
export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="h-full relative flex-1 px-12 w-full grid place-items-center">
      {/* subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-[#68BFA4]/30 via-transparent to-[#68BFA4]/30 blur-3xl"></div>
      </div>
      <motion.div
        initial={{
          width: "45rem",
          height: "25rem",
        }}
        animate={{
          width: isHovering ? "95%" : "45rem",
          height: isHovering ? "100%" : "25rem",
        }}
        className="relative grid place-items-center "
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className=" flex flex-col space-y-5 items-center">
          <h1 className="text-[1.5rem] text-[#414141]">
            Hear How They Level Up Their Game!
          </h1>
          <h2 className="font-bold text-[2rem] text-[#2B2B2B]">
            Skill <span className="text-[#1DA077]">Masters</span> Unite! 🤝
          </h2>
          <Link href="/">
            <motion.div
              initial={{
                gap: "0.25rem",
              }}
              animate={{
                gap: ["0.25rem", "1rem", "0.25rem"],
                keyTimes: ["0", "2", "4"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex space-x-2 font-semibold text-lg text-[#2B2B2B] items-center 
             "
            >
              <p>View all Testimonials</p>
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Link>

          <Testimonial1Component isHoveringParent={isHovering} />
          {/* like gif */}
          <motion.div
            initial={{
              left: "42%",
              top: 1,
            }}
            animate={{
              left: isHovering ? "42%" : "42%",
              top: isHovering ? "2rem" : 1,
            }}
            transition={{
              type: "spring",
              delay: 0.3,
            }}
            className="absolute w-24 h-24"
          >
            <TestimonialImage
              src="/like.gif"
              shouldAnimate={false}
              className="relative"
            />
          </motion.div>
          {/* testimoinal 2 */}
          <motion.div
            initial={{
              right: "10.5rem",
              top: 0,
            }}
            animate={{
              right: isHovering ? "11rem" : "10.5rem",
              top: isHovering ? "0.5rem" : 0,
            }}
            transition={{
              type: "spring",
              delay: 0.2,
            }}
            className="absolute w-24 h-24"
          >
            <TestimonialImage
              src="/testimonial-2.png"
              shouldAnimate={true}
              isHovering={isHovering}
              isAnimationTopDown={false}
              className="relative"
            />
          </motion.div>
          {/* testimonial 3 */}
          <motion.div
            initial={{
              right: "1rem",
              top: "35%",
            }}
            animate={{
              right: isHovering ? "3rem" : "1rem",
            }}
            transition={{
              type: "spring",
              delay: 0.3,
            }}
            className="absolute w-24 h-24"
          >
            <TestimonialImage
              src="/testimonial-3.png"
              shouldAnimate={true}
              isHovering={isHovering}
              isAnimationTopDown={true}
              className="relative"
            />
          </motion.div>
          {/* love gif */}
          <motion.div
            initial={{
              right: "7rem",
              bottom: "5.5rem",
            }}
            animate={{
              right: isHovering ? "15rem" : "7rem",
              bottom: isHovering ? "7rem" : "5.5rem",
            }}
            transition={{
              type: "spring",
              delay: 0.3,
            }}
            className="absolute w-24 h-24"
          >
            <TestimonialImage
              src="/love.gif"
              shouldAnimate={false}
              className="relative -z-10"
            />
          </motion.div>
          <Testimonial4Component isHoveringParent={isHovering} />
          {/* trophy gif */}
          <motion.div
            initial={{
              right: "45%",
              bottom: "2rem",
              scale: 1,
            }}
            animate={{
              bottom: isHovering ? "0rem" : "2rem",
              scale: isHovering ? 1.25 : 1,
            }}
            transition={{
              type: "spring",
              delay: 0.1,
            }}
            className="absolute -z-10 w-24 h-24"
          >
            <TestimonialImage
              src="/trophy.gif"
              shouldAnimate={false}
              className="relative -z-10"
            />
          </motion.div>
          {/* testimonial-5 */}
          <motion.div
            initial={{
              left: "9rem",
              bottom: "2rem",
            }}
            animate={{
              left: isHovering ? "14rem" : "9rem",
              bottom: isHovering ? "2.5rem" : "2rem",
            }}
            transition={{
              type: "spring",
              delay: 0.3,
            }}
            className="absolute w-24 h-24"
          >
            <TestimonialImage
              src="/testimonial-5.png"
              shouldAnimate={true}
              isHovering={isHovering}
              isAnimationTopDown={false}
              className="relative"
            />
          </motion.div>
          {/* happy life gif */}
          <motion.div
            initial={{
              left: "3rem",
              bottom: "2rem",
              scale: 1,
            }}
            animate={{
              bottom: isHovering ? "10rem" : "2rem",
              left: isHovering ? "9rem" : "3rem",
              scale: isHovering ? 1.25 : 1,
            }}
            transition={{
              type: "spring",
              delay: 0.1,
            }}
            className="absolute w-24 -z-10 h-24"
          >
            <TestimonialImage
              src="/happy-life.gif"
              shouldAnimate={false}
              className="relative -z-10"
            />
          </motion.div>
          {/* testimonial-6 */}
          <motion.div
            initial={{
              left: "1rem",
              bottom: "35%",
            }}
            animate={{
              left: isHovering ? "2rem" : "1rem",
            }}
            transition={{
              type: "spring",
              delay: 0.3,
            }}
            className="absolute w-24 h-24"
          >
            <TestimonialImage
              src="/testimonial-6.png"
              shouldAnimate={true}
              isHovering={isHovering}
              isAnimationTopDown={true}
              className="relative"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
// 1-2 words comment
function CommentBox({ text }: { text: string }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
      transition={{
        duration: 15,
        times: [0, 0.33, 0.5, 0.66, 0.75, 1],
        ease: "linear",
        repeat: Infinity,
      }}
      className="absolute  left-22 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md  shadow-lg  text-nowrap "
    >
      {text}
      <div className="absolute -left-1.5  rotate-45 bg-white top-1/2 -translate-y-1/2 w-3 h-3 shadow-lg " />
    </motion.div>
  );
}
// description with paragaraph , name and course // can be made resuable if needed
function DescriptionBox() {
  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0.5,
        bottom: -135,
      }}
      animate={{
        bottom: -180,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="absolute z-10 -bottom-45 left-1/2 -translate-x-1/2 text-xs tracking-tight border border-gray-200
     h-45 w-81 bg-white rounded-xl flex-flex-col space-y-4 p-3 shadow-lg "
    >
      <p>
        I was amazed and impressed by the course structure as it was distinctly
        different from other courses in the market. The classes were highly
        interactive and the instructor was very humble and friendly. Recordings
        of the classes were provided within a short time after each class, which
        made revision very easy and beneficial. I have recommended the same
        course to my data-enthusiast friends."
      </p>
      <div className="text-right">
        <p className="font-semibold">Rajesh Dhakal</p>
        <p>Digital Marketing Student</p>
      </div>
      <div
        className="absolute -top-1.5   rotate-45 bg-white border-l border-t border-gray-200 left-1/2
       -translate-x-1/2 w-4 h-4  "
      />
    </motion.div>
  );
}
// video box can be made resuable if needed
function VideoBox() {
  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0.5,
        bottom: -135,
      }}
      animate={{
        top: -268,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="w-40 h-67   absolute  -top-45 left-1/2 -translate-x-1/2 text-xs tracking-tight border border-gray-200
     bg-white rounded-xl flex-flex-col items-center space-y-4 p-3 shadow-lg"
    >
      <video src="/testimonial-video.mp4" autoPlay autoFocus />
      <div
        className="absolute -bottom-1.5   rotate-45 bg-white border-b border-r border-gray-200 left-1/2
       -translate-x-1/2 w-4 h-4  "
      />
    </motion.div>
  );
}
function Testimonial1Component({
  isHoveringParent,
}: {
  isHoveringParent: boolean;
}) {
  const [hoveringTestimonial, setHoveringTestimonial] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => {
        if (isHoveringParent) {
          setHoveringTestimonial(true);
        }
      }}
      onMouseLeave={() => setHoveringTestimonial(false)}
      initial={{
        left: "10rem",
        top: "1rem",
      }}
      animate={{
        top: isHoveringParent ? "0rem" : "1rem",
      }}
      transition={{
        type: "spring",
        delay: 0,
      }}
      className="absolute w-24 h-24 z-50"
    >
      <TestimonialImage
        src="/testimonial-1.png"
        isHovering={isHoveringParent}
        isAnimationTopDown={false}
        shouldAnimate={true}
        className={cn(
          ` relative hover:[box-shadow:0_0_25px_#5AA38F]
             transition-all duration-250 ease-in-out `
        )}
      >
        {isHoveringParent && <CommentBox text="Amazing ⭐⭐⭐⭐⭐" />}
        {hoveringTestimonial && <DescriptionBox />}
      </TestimonialImage>
    </motion.div>
  );
}

function Testimonial4Component({
  isHoveringParent,
}: {
  isHoveringParent: boolean;
}) {
  const [hoveringTestimonial, setHoveringTestimonial] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => {
        if (isHoveringParent) {
          setHoveringTestimonial(true);
        }
      }}
      onMouseLeave={() => setHoveringTestimonial(false)}
      initial={{
        right: "10rem",
        bottom: "0.5rem",
      }}
      animate={{
        bottom: isHoveringParent ? "1rem" : "0.5rem",
        right: isHoveringParent ? "12rem" : "10rem",
      }}
      transition={{
        type: "spring",
        delay: 0.1,
      }}
      className="absolute w-24 h-24 z-50"
    >
      <TestimonialImage
        src="/testimonial-4.jpg"
        isHovering={isHoveringParent}
        isAnimationTopDown={true}
        shouldAnimate={true}
        className={cn(
          ` relative hover:[box-shadow:0_0_25px_#5AA38F]
             transition-all duration-250 ease-in-out `
        )}
      >
        {isHoveringParent && <CommentBox text="⭐⭐⭐⭐⭐" />}
        {hoveringTestimonial && <VideoBox />}
      </TestimonialImage>
    </motion.div>
  );
}
