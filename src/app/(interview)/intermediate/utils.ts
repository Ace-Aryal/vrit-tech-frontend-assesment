// palindrome
// Task 8
export function palindromeChecker(input: number | string) {
  const reversedString =
    typeof input === "string"
      ? input.split("").reverse().join("")
      : input.toString().split("").reverse().join("");
  if (reversedString === input) {
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
