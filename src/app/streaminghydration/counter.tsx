"use client"
import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ marginBottom: "4rem", textAlign: "center" }}>
      <h4 style={{ marginBottom: 16 }}>{count}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)} style={{ marginInline: 16 }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
