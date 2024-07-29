import React, { useEffect } from 'react'

export default function UseEffecthook() {

    function test(){
        alert("data has been submitted")
        console.log('Event fire bro')
    }
    useEffect(()=> {
        test();
    },[]
    )
  return (
    <div>
        <h1>UseEffecthook  </h1>

    {/* <button onClick={test}>Click</button> */}

    </div>
  )
}
