import React, { useEffect, useState } from 'react'

const EffectThree = () => {
    const [counter1, setCounter1] = useState(12)
    const [counter2, setCounter2] = useState(76)

    useEffect(() => {
        console.log("Code exuccted.")
    }, [counter1])

    // useeffect will execute the code on insital/first render and 
    // when passed dependency changes 

    return (
        <div>
            <h1>Counter 1 : {counter1}</h1>
            <button onClick={() => setCounter1(counter1 + 1)}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </div>
    )
}

export default EffectThree