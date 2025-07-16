"use client";
import React, { useEffect, useState } from "react";
import {
  findLargestNumber,
  printEvenNumbers,
  sumOfArrayNumbers,
} from "./utils";

function EasyQuestions() {
  const [largestNum, setLargestNum] = useState(0);
  const [evenNumbers, setEvenNumbers] = useState<number[]>([]);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    // used same values as provided in the assignment
    setLargestNum(findLargestNumber([1, 7, 9, 2, 5]));
    setEvenNumbers(printEvenNumbers(10));
    setSum(sumOfArrayNumbers([1, 5, 9]));
  }, []);

  return (
    <div className="w-full flex justify-around items-center ">
      <div>
        <p>Largest Number :{largestNum}</p>
      </div>
      <div>
        <p>Even Numbers:{evenNumbers.join(",")}</p>
      </div>
      <div>
        <p>Sum of array :{sum}</p>
      </div>
    </div>
  );
}

export default EasyQuestions;
