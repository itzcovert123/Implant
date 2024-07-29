
import {React, useState} from 'react'

export default function CounterFunc(){
    const [count,setCount]=useState(0)

    function counter(){
        setCount(count +1);
    }
    function stop(){
        setCount(count-1)
    }
    return(
            <>
                    <div className='test'>
                    <h1>Count Pushups</h1>
                    <h2>{count}</h2>
                    <button onClick={counter}>Add</button>
                    <button onClick={stop}>Back</button>
                    </div>
            </>
    )
}