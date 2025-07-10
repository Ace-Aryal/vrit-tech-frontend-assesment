import { cn } from "@/lib/utils";
import React from "react";

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
    <div
      className={cn(
        "relative  aspect=[592/351]  py-[58px] bg-red-500 rounded-3xl flex gap-2 text-white px-[35px] ",
        className,
        {
          "text-left ": imagePosition === "right",
          "text-right": imagePosition === "left",
        }
      )}
    >
      <div
        className={cn("w-1/3 relative ", {
          "order-1": imagePosition === "right",
        })}
      >
        {" "}
        <div
          className={cn("absolute z-40 -bottom-36 animate-vertical-marquee", {
            "-left-32": imagePosition === "left",
            "-right-20": imagePosition === "right",
          })}
        >
          <div> {svg}</div>
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-8">
        <h2 className="text-2xl  font-bold whitespace-nowrap">{heading}</h2>
        <h3 className=" text-lg font-semibold ">{subHeading}</h3>
        <p className="">{paragraph}</p>
      </div>
    </div>
  );
}

export default OuterConatiner;
