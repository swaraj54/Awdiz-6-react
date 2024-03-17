import React, { useEffect, useState } from 'react'

const Render = () => {
    // when state changes page rerender  1 page render 2
    const [counter, setCounter] = useState(1)

    function Increment() {
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>counter - {counter}</h1>
            <button onClick={Increment}>+ 3</button>
        </div>
    )
}

export default Render