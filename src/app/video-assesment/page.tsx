"use client";
import { useEffect, useState } from "react";
const noOfRows = 9;
const noOfColumns = 28;
export default function VideoPage() {
  const matrix = new Array(9 * 28).fill("");
  const selectOneItemPerRow = () => {
    const selectedNumbers = [];
    for (let i = 0; i < noOfRows; i++) {
      selectedNumbers.push(
        Math.floor(Math.random() * noOfColumns) + i * noOfColumns
      );
    }
    return selectedNumbers;
  };
  const initalPositions = [0, 29, 58, 87, 116, 145, 174, 203, 232, 261];
  const [selectedNumbers, setSelectedNumbers] =
    useState<number[]>(initalPositions);

  useEffect(() => {
    setInterval(() => {
      setSelectedNumbers(selectOneItemPerRow());
    }, 1500);
  }, []);
  return (
    <div id="grid-container" className="grid grid-cols-28 w-full h-full flex-1">
      {matrix.map((_, index) => (
        <div
          key={index}
          className={`h-full w-full border border-gray-300  ${
            selectedNumbers.includes(index)
              ? "bg-indigo-600  animate-fadeout"
              : ""
          }`}
        ></div>
      ))}
    </div>
  );
}
