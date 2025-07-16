// find largest number
export function findLargestNumber(numbers: number[]) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

//print even numbers

export function printEvenNumbers(finalNum: number) {
  const evenNumsArray = [];
  for (let i = 1; i <= finalNum; i++) {
    if (i % 2 === 0) {
      evenNumsArray.push(i);
    }
  }
  return evenNumsArray;
}

// sum of array numbers

export function sumOfArrayNumbers(numberArray: number[]) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum
}
