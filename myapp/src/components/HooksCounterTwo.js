import React, { useState } from 'react'

function HooksCounterTwo() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount)
    
    // Using increment 5 like this will club all the 5 setCount calls into 1 to optimize the performance
    // const increment5 = () => {
    //     for (let i = 0; i<5; i++) {
    //         setCount(count+1)
    //     }
    // }

    // Therefore the correct way of doing this is. 
    // When we want to change the current value based on the previous value, we need to pass the previousValue 
    // as the function parameters in the setCount or setState function

    const increment5 = () => {
        for (let i = 0; i<5; i++)
            setCount(prevCount => prevCount+1)
    }
    
    // And when we do this. (above operations i.e. prevCount), then we need to change the increment and decrement
    // buttons as well. We need to set increment or decrement count based on prevCount value

    // Earlier 
    // <button onClick={() => setCount(count+1)}>Increment</button>
    // <button onClick={() => setCount(count-1)}>Decrement</button>
    
    // Now
    // <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
    // <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
    
    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
            <button onClick={increment5}>Increment5</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default HooksCounterTwo
