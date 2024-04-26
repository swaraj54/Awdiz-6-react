"use client";

import { useState } from "react";

export default function Page()  {
  const [counter, setCounter] = useState<number>(0);
  

  return (
    <main className=" min-h-screen ">
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </main>
  );
}
