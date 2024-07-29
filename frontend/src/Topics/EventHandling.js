import React from 'react'

export default function EventHandling() {
    function test1(){
        alert("Why to click")
    }

    let name= "Kavita"
  return (
    <>         <h1>{name}</h1>
            <h1>Event Handling</h1>
            <button onClick={test1}> Click me</button>
    </>
  )
}
