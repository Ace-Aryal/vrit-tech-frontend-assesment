"use client";
import { useEffect, useState } from "react";
export default function VideoPage() {
  const matrix = new Array(9 * 28).fill("");
  const noOfRows = 9;
  const noOfColumns = 28;
  const selectOneItemPerRow = () => {
    const selectedNumbers = [];
    for (let i = 0; i < noOfRows; i++) {
      selectedNumbers.push(
        Math.floor(Math.random() * noOfColumns) + i * noOfColumns
      );
    }
    return selectedNumbers;
  };
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  useEffect(() => {
    setInterval(() => {
      setSelectedNumbers(selectOneItemPerRow());
    }, 1500);
  }, []);
  return (
    <div id="grid-container" className="grid grid-cols-28 w-full h-full flex-1">
      {matrix.map((_, index) => (
        <div
          key={index + Math.random()}
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
