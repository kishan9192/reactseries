import React, { useEffect, useState } from 'react'

function UseEffectsOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    // UseEffect is a method that runs every time the component is rendered
    // Passing the count as second parameter will make sure that the component is not 
    // re-rendered till the value of the count is unchanged. abs
    // We need to pass an array of values as a second parameter, whose change in value
    // leads to re rendering of the component
    useEffect(() => {
        console.log("Updating the component")
        document.title = `You clicked ${count} times`
    }, [count])
    
    return (
        <div>
            <input type = "text" value = {name} onChange = {e => setName(e.target.value)} />
            <button onClick = {() => setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

/* So whenever we are taking the input, the state of the component is changing and the component is re rendered.
Now we are calling useEffect which runs everytime the component is rendered or re rendered. Therefore we are setting
document title to the same string everytime we are clicking or changing the input field . So to avoid 
unnecessary calling of componend did update , in this case useEffect, we pass in the second parameter which is 
array of values which when changed are responsible for the component to be rendered.
*/


// IF WE WANT TO RENDER THE COMPONENT ONLY ONCE, WE NEED TO PASS THE EMPTY ARRAY AS A SECOND PARAMETER
// SO THAT WE ARE NOT DEPENDENT ON ANY VALUE OR VARIABLE FOR RE-RENDERING OUR COMPONENT


// ALL THE CLEANUP CODE THAT IS TO BE PERFORMED (COMPONENT WILL UNMOUNT), IS TO BE WRITTEN INSIDE THE FUNCTION
// OF USE EFFECTS, AND RETURN THAT FUNCTION

// EX: useEffect(()=> {
//     console.log('Component Mount/Rerender')
//     window.addEventListener('mousemove', logMousePosition)

//     // Clean Up Code, when the component is Unmounted then all subscriptions to it should be cancelled
//     return () => {
//         window.removeEventListener('mousemove', logMousePosition);
//     }
// },[])

export default UseEffectsOne