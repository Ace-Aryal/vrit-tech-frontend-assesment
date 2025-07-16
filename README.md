# Vrit Interview Solution Docs

## Easy Tasks

- Task 2
  : Write function to find largest number

```ts
//   solution
export function findLargestNumber(numbers: number[]) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}
// input : [1,7,9,2,5]
// output : 9
```

- Task 3
  : Write function to print even numbers till "n" number
  x

```ts
//   solution
export function printEvenNumbers(finalNum: number) {
  const evenNumsArray = [];
  for (let i = 1; i <= finalNum; i++) {
    if (i % 2 === 0) {
      evenNumsArray.push(i);
    }
  }
  return evenNumsArray;
}
//Input : 10
// Output : [2,4,6,8,10]
```

- Task 4
  : Write function to find sum of numbers of an array

```ts
// solution
export function sumOfArrayNumbers(numberArray: number[]) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}
}
// Input : [1,5,9]
// Output : 15
```

## Intermediate Tasks

- Task 8 : Check palindrome of given number or string

```ts
// solution
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
// Input : madam
// Output : true

// Input : 121
// output : true

// Input : hello
// output :false
```

- Task 9 : Check frequency of characters in a string

```ts
// solution
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
// input : "Hello"
// output :
//  {
//     H: 1,
//     e: 1,
//     l : 2,
//     o :1
// }
```

- Task 10: Controlled and unconrolled components

  - Conrolled form
  - In React, Controlled components are those components which are directly controlled by react state. In the below example the values of both inputs are controlled
    by `useState` and the `value` for form inputs are derived from `state variables` . Also when the values of input fields changes that effect is reflecetd
    in the state variables. This re-renders the page on every state change.

  ```ts
  // state variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //handler
  function submitControlledInput(e: FormEvent) {
    e.preventDefault();
    // submit logic and validations here
    console.log("Controlled", {
      username,
      password,
    });
  }

  //form
  <form
    onSubmit={submitControlledInput}
    action=""
    className="flex flex-col justify-center space-y-2"
  >
    <div>Controlled login form</div>
    <div className="flex gap-4 justify-between">
      <label htmlFor="">Username:</label>
      <input
        className="border w-64"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
      />
    </div>
    <div className="flex gap-2 justify-between">
      <label htmlFor="">Passoword:</label>
      <input
        className="border w-64"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
    </div>
    <button type="submit" className="bg-gray-100 rounded-lg p-1">
      Submit
    </button>
  </form>;
  ```

  - Uncontrolled form
  - In React, uncontrolled components are those components which are not controlled by React hooks and instead they are referenced from the `DOM` iteslf using
    useRef hook, instead of state this provides the `DOM reference` of the component and this also does not cause re-render

```ts
// Ref
const usernameRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);

// handler
function submitUncontrolledInput(e: FormEvent) {
  e.preventDefault();
  const username = usernameRef.current?.value;
  const password = passwordRef?.current?.value;
  console.log("Uncontrolled", {
    username,
    password,
  });
}

// form
<form
  onSubmit={submitUncontrolledInput}
  action=""
  className="flex flex-col justify-center space-y-2"
>
  <p>Uncontrolled login form</p>
  <div className="flex gap-2 justify-center">
    <label htmlFor="">Username:</label>
    <input className="border w-64" ref={usernameRef} type="text" />
  </div>
  <div className="flex gap-2 justify-center">
    <label htmlFor="">Passoword:</label>
    <input className="border w-64" ref={passwordRef} type="password" />
  </div>
  <button type="submit" className="bg-gray-100 rounded-lg p-1">
    Submit
  </button>
</form>;
```

## Debugging tasks

- Task 1: Debug and explain below code

```ts
export function test() {
  if (true) {
    var message = "hi";
  }
  console.log(message);
}
// prints "hi"
// To get scoping for "message" use let or const instead
```

Reason : This is because of Javascript scoping ,
In js only `let` and `const` has block scope but variable declared with `var` keyword has functional scope
therefore the scole of variable message here is the function `test` itself so variable `message` is still
defined in the scope of `console.log(message)` so we get output `hi`
to tackle this problem `let` & `const` keyoword were introduces in ES6

- Task 2 : Debug and explain the code

```ts
const a = { name: "example" };
const b = { name: "example" };
console.log(a === b);
// prints false
```

Reason :
This is because ojects are reference types / non-primitives , javascript doesnot store direct
values for non-primitives inside memory instead it stores the reference (base memory address)
of the non-primitive, so even though `a` and `b` seems like same object , they are completely different objects
holding different memory address and we are comparing memory address with `===` operator giving output `false`.

- Task 3: Debug the React code

```ts
<button onClick={handleClick()}>Click Me</button>
```

The above code is syntactically incorrect for desired action because `onClick` or any other handlers in React expects callback function,
but in the above snippet we are calling `handleClick` function directly instead of passing it as a callback, so the function will be
executed during rendering time not during click event.

```ts
// fixed code
<button onClick={handleClick}>Click Me</button>
```

`handleClick` is passed as a callback function

- Task 4 : Debug the given React code

```ts
function increment() {
  setCount(count++);
}
```

The above commented code is syntacticaly incorrect because `count++` is the shortHand for `count = count + 1`
so we are basically calling `setCount(count = count +1 )` which is invalid.,
correct syntax would be

```ts
//solution 1
setCount(count + 1);
```

or

```ts
//solution 2
setCount((prevCount) => prevCount + 1);
```

this way we can call `setCount correctly` also this approach does not batch update count
like that the above solution 1
