"use client";
import React, { useState } from "react";
import Task3Card from "./_components/card";
const courseConfigs = [
  {
    heading: "All Courses",
    subHeading: "courses you're powering through right now.",
    noOfCourses: 23,
  },
  {
    heading: "Upcoming Courses",
    subHeading: "exciting new courses waiting to boost your skills.",
    noOfCourses: 5,
  },
  {
    heading: "Ongoing Courses",
    subHeading: "currently happening—don’t miss out on the action!",
    noOfCourses: 10,
  },
];
function Task3Page() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <div className=" flex flex-col space-y-16 mx-auto">
      <section className="flex flex-col gap-4 ">
        <h1 className="text-2xl text-[#414141] font-semibold">
          {" "}
          Explore our classes and master trending skills!
        </h1>
        <h2 className="text-[2rem] font-bold text-[#2B2B2B]">
          Dive Into{" "}
          <span className="text-[#1DA077]">What's Hot Right Now! </span> 🔥
        </h2>
      </section>
      <section className="flex space-x-8">
        {courseConfigs.map((course, index) => (
          <Task3Card
            activeCardIndex={activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
            key={course.heading}
            index={index}
            heading={course.heading}
            subHeading={course.subHeading}
            noOfCourses={course.noOfCourses}
          />
        ))}
      </section>
    </div>
  );
}

export default Task3Page;
