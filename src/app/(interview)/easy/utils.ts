// reverse a string : task 1
export function reverseString(input: string) {
  return input.split("").reverse().join("");
}

// find largest number : task2
export function findLargestNumber(numbers: number[]) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

//print even numbers : task 3

export function printEvenNumbers(finalNum: number) {
  const evenNumsArray = [];
  for (let i = 1; i <= finalNum; i++) {
    if (i % 2 === 0) {
      evenNumsArray.push(i);
    }
  }
  return evenNumsArray;
}

// sum of array numbers : task 4

export function sumOfArrayNumbers(numberArray: number[]) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}
