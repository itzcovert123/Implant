import React,{useState} from 'react'

export default function UsestateHook() {
  const [count,setcount]=useState(10)
  const test=() => {
    setcount(count+10)
  }
  return (

    <div>
      <h1>UsestateHook</h1>
      <h3>{count}</h3>
      <button onClick={test}>Increment</button>
      </div>

  )
}
