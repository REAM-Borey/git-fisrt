"use client"
import React, { useState, useEffect } from 'react';

export default function Counter() {
  // 1️⃣ Create a state variable called "count"
  const [count, setCount] = useState(0);

  // 2️⃣ Run side effect when count changes
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]); // Runs every time "count" changes

  return (
    <div className="p-4">
      <h1>You clicked {count} times</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {count}
      </button>
    </div>
  );
}
