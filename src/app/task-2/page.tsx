import React from "react";
import OuterConatiner from "./_components/outer-container";
import { TASK_TWO_CONFIG } from "@/configs/task2configs";

function Task2Page() {
  return (
    <div className="max-w-screen px-12 ">
      <div className="mb-12 space-y-5">
        <h1 className=" text-2xl text-[#414141] font-semibold">
          Your SkillShikshya Jourey
        </h1>
        <h2 className="text-[2rem] font-bold text-[#2B2B2B]">
          <span className="text-[#1DA077]">Step</span> In.{" "}
          <span className="text-[#1DA077]">Skill</span> Up.{" "}
          <span className="text-[#1DA077]">Stand</span> Out. 🚀
        </h2>
      </div>

      <div className="grid  grid-cols-2 gap-10 space-y-4 max-w-screen ">
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
    </div>
  );
}

export default Task2Page;
