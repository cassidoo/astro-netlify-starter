import React, { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      <h1>Simple React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
