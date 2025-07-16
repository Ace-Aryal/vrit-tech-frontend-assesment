// debug task 1
export function test() {
  if (true) {
    var message = "hi";
  }
  console.log(message);
}
// prints "hi"
//Reason : This is because of scoping :
// In js only let and const has block scope but variable devlared with "var" keyword has functional scope
// therefore the scole of variable message here is the function test itself so variable message is still
// defined in the scope of console.log(message) snd we get output "hi"
// to tackle this problem "let" & "const" keyoword were introduces in ES6

// debug task 2
const a = { name: "example" };
const b = { name: "example" };
console.log(a === b);
// prints false
// Reason :
//  This is because ojects are reference types , javascript doesnot store direct
//  values for non-primitives inside memory instead it stores the reference (base memory address)
// of the non-primitive so even though a and b seems same object , they are completely different objects
// holding different memory address and we are comparing memory address with "==="" operator
