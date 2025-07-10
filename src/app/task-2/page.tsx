import React from "react";
import OuterConatiner from "./_components/outer-container";
import { TASK_TWO_CONFIG } from "@/configs/task2configs";

function Task2Page() {
  return (
    <div className="grid px-12 grid-cols-2 gap-8 max-w-screen">
      {TASK_TWO_CONFIG.map((config, index) => {
        const { heading, subHeading, paragraph, className, hasSlides, svg } =
          config;
        const isEven = (index + 1) % 2 === 0;
        return (
          <OuterConatiner
            imagePosition={isEven ? "right" : "left"}
            heading={heading}
            subHeading={subHeading}
            paragraph={paragraph}
            className={className}
            svg={svg}
            key={heading}
          />
        );
      })}
    </div>
  );
}

export default Task2Page;
