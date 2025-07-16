"use client";
import React, {
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { characterFrequencyChecker, palindromeChecker } from "./utils";

function IntermediateQuestions() {
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  function submitControlledInput(e: FormEvent) {
    e.preventDefault();
    // submit logic and validations here
    console.log("Controlled", {
      username,
      password,
    });
  }

  function submitUncontrolledInput(e: FormEvent) {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef?.current?.value;
    console.log("Uncontrolled", {
      username,
      password,
    });
  }
  useEffect(() => {
    setIsPalindrome(() => palindromeChecker("madam"));
    console.log(characterFrequencyChecker("Hello"));
    // prints
    //  {
    //     H: 1,
    //     e: 1,
    //     l : 2,
    //     o :1
    // }
  }, []);
  return (
    <div className="w-full flex flex-col justify-around items-center space-y-10 ">
      <div className="flex w-full justify-around">
        {" "}
        <div>
          <p>
            Palindrome (madam) :{" "}
            {isPalindrome === null
              ? "processing"
              : isPalindrome === false
              ? "false"
              : "true"}
          </p>
        </div>
      </div>
      <div className="space-y-16">
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
        </form>
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
        </form>
      </div>
    </div>
  );
}

export default IntermediateQuestions;
