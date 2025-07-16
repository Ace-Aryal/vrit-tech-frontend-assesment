"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import {
  characterFrequencyChecker,
  findNonRepeatingUniqueCharacter,
  flattenNestedArray,
  palindromeChecker,
} from "./utils";

function IntermediateQuestions() {
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  useEffect(() => {
    setIsPalindrome(() => palindromeChecker("madam"));
    console.log("character frequency", characterFrequencyChecker("Hello"));
    console.log("flattened array", flattenNestedArray([1, [2, [3, 4], 5], 6]));
    console.log(
      "first unique char",
      findNonRepeatingUniqueCharacter("aabbcdeff")
    );

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
        <hr />
        <ControlledForm />
        <hr />
        <UncontrolledForm />
        <hr />
      </div>

      <WHOISLookupComponent />
    </div>
  );
}

export default IntermediateQuestions;

function ControlledForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function submitControlledInput(e: FormEvent) {
    e.preventDefault();
    // submit logic and validations here
    console.log("Controlled", {
      username,
      password,
    });
  }
  return (
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
  );
}

function UncontrolledForm() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  function submitUncontrolledInput(e: FormEvent) {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef?.current?.value;
    console.log("Uncontrolled", {
      username,
      password,
    });
  }
  return (
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
  );
}
// Domain WHOIS lookup : Task 12
function WHOISLookupComponent() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [domainInput, setDomainInput] = useState("");
  const [domainRes, setDomainRes] = useState<unknown>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(
            `https://api-ninjas.com/api/${domainInput}`
          );
          if (!response.ok) {
            setErrorMessage("Error fetching data");
          }
          if (response.status === 404) {
            setErrorMessage("Domain not found");
          }
          const data = await response.json();
          setDomainRes(data);
          console.log(data);
        } catch (error: unknown) {
          console.error(error);
          const errorMessage =
            error instanceof Error ? error.message : "Error fetching data";
          setErrorMessage(errorMessage);
        }
      }}
      className="flex flex-col space-y-2 "
    >
      <label htmlFor="whois">Enter Domain Name:</label>
      <input
        value={domainInput}
        onChange={(e) => {
          setDomainInput(e.target.value);
        }}
        type="text"
        className="border"
      />
      <button
        type="submit"
        className="justify-self-center bg-gray-100 rounded-lg p-1"
      >
        Look up domain
      </button>
      <p className="text-sm text-red-600">{errorMessage}</p>
    </form>
  );
}
