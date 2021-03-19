import React, { useState } from 'react'

function HooksCounterFour() {
    const [items, setArr] = useState([])
    
    const addItem = () => {
        setArr(
            [...items, {
                id: items.length,
                value: "Kishan"
            }]
        )
    }
    return (    
        <div>
            <button onClick={addItem}>Set Item</button>
            <ul>
                {
                    items.map(item => 
                        <li key = {item.id}>{item.value}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default HooksCounterFour
