"use client";
import React, { useEffect } from "react";
import { test } from "./utils";
// js files are available in utils.ts : can be imported here to test
function DebuggingJs() {
  useEffect(() => {
    test();
  }, []);
  return (
    <div className="h-full w-full flex justify-center">DebuggingTasks</div>
  );
}

export default DebuggingJs;
