import React, {useState} from 'react'

function HooksCounter() {
    const [count, setCounter] = useState(0)
    return (
        <div>
            <button onClick={()=>setCounter(count+1)}>Count {count}</button>
        </div>
    )
}

// RULES TO WORK WITH HOOKS

// DONT CALL HOOKS INSIDE ANY FUNCTIONS, LOOPS, CONDITIONS etc
// ONLY CALL HOOKS FROM REACT FUNCTIONS, call them from the react functional components and not from any other
// regular JAVASCRIPT function

export default HooksCounter
