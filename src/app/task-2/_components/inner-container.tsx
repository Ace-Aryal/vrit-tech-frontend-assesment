import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

function InnerContainer() {
  return (
    <div
      className={cn(
        `h-full w-full flex flex-col  relative rounded-3xl overflow-clip`
      )}
    >
      <div
        className="absolute h-25 w-30 flex justify-center items-center rounded-full top-1/2
         -translate-y-1/2 -left-8  bg-background 
      ring-white ring-4
      "
      >
        <div className="w-18 h-18  shadow-md flex justify-center items-center bg-background rounded-full absolute left-8">
          <ArrowLeft className="w-8 h-8 text-gray-500" />
        </div>
      </div>
      <div
        className="absolute h-25 w-30 flex justify-center items-center rounded-full top-1/2 -translate-y-1/2 -right-8  bg-white 
      ring-white ring-4"
      >
        <div className="w-18 h-18 shadow-md  flex justify-center items-center bg-white rounded-full absolute right-8">
          <ArrowRight className="w-8 h-8  text-gray-500" />
        </div>
      </div>
      <div className="bg-red-500 flex-1 rounded-3xl"></div>
      <div className="bg-red-500 flex-1 rounded-3xl"></div>
      <div className="bg-red-500 flex-1 rounded-3xl"></div>
      <div></div>
    </div>
  );
}

export default InnerContainer;
