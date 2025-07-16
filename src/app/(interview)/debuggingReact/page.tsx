"use client";
import React, { useState } from "react";

function DebuggingReact() {
  const [count, setCount] = useState(0);
  function handleClick() {
    alert("Button fixed");
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
    <div className="flex flex-col space-y-8 ">
      <div className="flex w-full justify-center">
        {/* Event handler issue ,Debug task :3 */}
        {/* <button onClick={handleClick()}>Click Me</button> : wrong*/}
        <button
          className="border rounded p-1 bg-gray-100"
          onClick={handleClick}
        >
          Click Me
        </button>
        {/* fixed */}
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Count: {count}</p>
        <button className="border p-1 bg-gray-100 rounded" onClick={increment}>
          Count+
        </button>
      </div>
      Please look up to the docs or code file for React Debugging tasks
      <p></p>
    </div>
  );
}

export default DebuggingReact;
