import { useEffect, useState } from "react"

function EffectOne() {
    const [counter, setCounter] = useState(1)
    const [counter2, setCounter2] = useState(7)

    useEffect(() => {
        console.log("Code exciuted!")
    })

    // useeffect will execute the code on initial/first render of component and 
    // whenever any state changes

    return (
        <div>
            <h1>Counter 1 : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </div>
    )
}
export default EffectOne