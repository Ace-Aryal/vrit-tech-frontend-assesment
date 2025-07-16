// flatten a nested array : Task 7

export function flattenNestedArray<T>(arrayInput: T[]) {
  return arrayInput.flat(Infinity);
}

// palindrome
// Task 8
export function palindromeChecker(input: number | string) {
  const reversedString =
    typeof input === "string"
      ? input.split("").reverse().join("")
      : input.toString().split("").reverse().join("");
  if (reversedString === input.toString()) {
    return true;
  }
  return false;
}
// character frequency checker
//Task 9
export function characterFrequencyChecker(input: string) {
  const frequencyObject: { [key: string]: number } = {};
  const splittedString: string[] = input.split("");
  for (let i = 0; i < input.length; i++) {
    const character = splittedString[i];
    if (frequencyObject[character]) {
      frequencyObject[character]++;
    } else {
      frequencyObject[character] = 1;
    }
  }
  return frequencyObject;
}
// Find First Non-Repeating Character : Task 11

export function findNonRepeatingUniqueCharacter(input: string) {
  const splittedString = input.split("");
  const firstNonRepeatingString = splittedString.find((character, index) => {
    if (index === 0 && character !== splittedString[index + 1]) {
      return true;
    }
    if (
      index === splittedString.length - 1 &&
      character !== splittedString[index - 1]
    ) {
      return true;
    }
    if (
      character !== splittedString[index - 1] &&
      character !== splittedString[index + 1]
    ) {
      return true;
    }
  });
  return firstNonRepeatingString;
}
