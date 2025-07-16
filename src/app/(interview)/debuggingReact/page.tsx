"use client";
import React, { useState } from "react";

function DebuggingReact() {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log("clicked button");
  }
  function increment() {
    // setCount(count++)
    // The above commented code is incorrect because count++ is the shortHand for count = count + 1
    // so we are basically doing setCount(count = count +1 ) which is invalid setter for useState,
    // correct syntax would be :
    // setCount(count + 1);
    // or
    setCount((prevCount) => prevCount + 1);
    //  this way we can call setCount correctly also this approach does not batch update count
    // like the above solution
  }
  return (
    <div className="flex flex-col space-y-8">
      <div>
        {/* Event handler issue ,Debug task :3 */}
        {/* <button onClick={handleClick()}>Click Me</button> : wrong*/}
        <button onClick={handleClick}>Click Me</button>
        {/* fixed */}
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Count: {count}</p>
        <button onClick={increment}>Count+</button>
      </div>
    </div>
  );
}

export default DebuggingReact;
