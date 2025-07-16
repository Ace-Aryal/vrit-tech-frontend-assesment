"use client";
import React, { useEffect, useState } from "react";
import {
  findLargestNumber,
  printEvenNumbers,
  sumOfArrayNumbers,
} from "./utils";

function EasyQuestions() {
  {
    /* ?Task : 5 -> useState basic example */
  }
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
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="flex flex-col gap-3">
        <div>
          <p>Largest Number for input [1, 7, 9, 2, 5] :{largestNum}</p>
        </div>
        <div>
          <p>Even Numbers until 10:{evenNumbers.join(",")}</p>
        </div>
        <div>
          <p>Sum of array [1, 5, 9]:{sum}</p>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default EasyQuestions;
