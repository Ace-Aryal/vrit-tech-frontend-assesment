"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
type Task3CardProps = {
  heading: string;
  index: number;
  subHeading: string;
  noOfCourses: number;
  activeCardIndex: number;
  setActiveCardIndex: React.Dispatch<React.SetStateAction<number>>;
};
function Task3Card({
  heading,
  index,
  subHeading,
  noOfCourses,
  activeCardIndex,
  setActiveCardIndex,
}: Task3CardProps) {
  const isActive = index === activeCardIndex;
  return (
    <motion.div
      initial={{
        width: "17.4rem",
        height: "28.75rem",
      }}
      animate={
        isActive
          ? {
              width: "36.25rem",
              backgroundColor: "#C33241",

              color: "white",
              gap: "2rem",
            }
          : {
              width: "17.4rem",

              backgroundColor: "#F9EBEC",

              color: "#C33241",
            }
      }
      transition={{
        duration: 0.4,
      }}
      onClick={() => setActiveCardIndex(index)}
      className={cn(
        `w-70 rounded-4xl  h-115 flex flex-col my-auto justify-center items-center
          p-10`
      )}
    >
      <motion.div
        animate={
          isActive
            ? {
                backgroundColor: "#C33241",
                flexDirection: "row-reverse",
                color: "white",
                gap: "2rem",
              }
            : {
                width: "17.4rem",

                backgroundColor: "#F9EBEC",
                flexDirection: "column",
                color: "#C33241",
              }
        }
        transition={{
          duration: 0.4,
        }}
        whileHover="hovered"
        className={cn(
          `w-70 rounded-4xl relative h-115 flex   justify-center items-center
          `
        )}
      >
        {!isActive && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            variants={{
              hovered: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute w-50 h-50 -top-20 right-0 "
          >
            <p className="text-black text-lg">Click Me!</p>
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_12292)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.3107 29.2223C19.0685 29.8028 17.6675 29.9135 16.1368 29.3604C11.4019 27.6491 9.68584 23.7511 9.70092 19.2578C9.72317 12.6969 13.4916 4.85549 16.6614 1.03895C16.8113 0.85802 17.0794 0.833841 17.2593 0.983691C17.4402 1.13361 17.4654 1.40176 17.3155 1.5827C14.2387 5.28678 10.573 12.8938 10.551 19.2613C10.5373 23.387 12.0771 26.9892 16.4263 28.5603C17.7204 29.0289 18.9024 28.9315 19.9539 28.4434C19.6455 27.7513 19.3606 27.0596 19.1004 26.3694C18.3827 24.4641 17.4575 19.2405 18.1576 15.4853C18.6606 12.7917 19.9968 10.8551 22.6393 11.0904C24.1081 11.2215 25.1154 12.2043 25.6757 13.7032C26.4472 15.7634 26.3568 18.8407 25.5431 21.7439C24.866 24.1612 23.6915 26.454 22.1347 27.9448C21.7919 28.2717 21.432 28.5622 21.0545 28.8074C25.5145 38.3248 34.328 47.5132 43.7027 51.7403C43.916 51.8375 44.0121 52.0885 43.915 52.3028C43.8189 52.5172 43.5668 52.6122 43.3535 52.5162C33.8262 48.2194 24.8653 38.896 20.3107 29.2223ZM20.696 28.0208C20.4076 27.3698 20.1407 26.719 19.8962 26.0696C19.209 24.2436 18.3228 19.2395 18.9938 15.6416C19.4053 13.4335 20.3983 11.7443 22.5641 11.9371C23.7014 12.039 24.4448 12.8409 24.88 14.0009C25.3574 15.2775 25.4648 16.9729 25.2643 18.7609C24.96 21.4755 23.9427 24.4026 22.3639 26.4209C21.8641 27.0605 21.3065 27.6074 20.696 28.0208Z"
                  fill="#2B2B2B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.9805 37.3786C37.5246 42.4216 40.4556 47.9376 43.7421 51.8355C43.8932 52.0147 43.8701 52.2831 43.6909 52.4343C43.5116 52.5854 43.2432 52.5633 43.092 52.3841C39.7024 48.3648 36.6965 42.6689 36.1353 37.4701C36.11 37.2374 36.2789 37.0276 36.5127 37.0024C36.7454 36.9771 36.9552 37.146 36.9805 37.3786Z"
                  fill="#2B2B2B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.0317 52.4702C39.5018 50.1524 33.9058 49.5141 29.7474 50.3185C29.5167 50.3633 29.2928 50.2128 29.2491 49.9822C29.2044 49.7515 29.3547 49.5287 29.5854 49.484C33.9418 48.6413 39.8001 49.3315 43.4983 51.7597C43.6946 51.888 43.7491 52.1526 43.6208 52.3489C43.4914 52.5451 43.2279 52.5996 43.0317 52.4702Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_12292">
                  <rect
                    width="50"
                    height="50"
                    fill="white"
                    transform="matrix(0.998071 0.0620871 0.0620871 -0.998071 0.938477 49.9082)"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
        )}
        {/* original elements */}
        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: isActive ? 90 : 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className={cn(
            "h-60 w-55 flex flex-col  gap-3 items-start rotate-270 justify-center "
          )}
        >
          <h3 className="text-[2rem] font-bold leading-tight ">{heading}</h3>
          <p className=" w-full text-lg">{subHeading}</p>
        </motion.div>
        <p className="text-[9.3rem] tracking-tighter font-bold leading-none relative">
          {noOfCourses.toString().padStart(2, "0")}
          <motion.span
            initial={{
              y: 0,
            }}
            whileHover={{
              y: 4,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute font-extrabold text-[5rem] -right-7 -top-7"
          >
            +
          </motion.span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Task3Card;
