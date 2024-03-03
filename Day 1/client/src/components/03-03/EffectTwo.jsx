import { useEffect, useState } from "react"

const EffectTwo = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("Code excuted.")
    }, [])

    // useeffect will excute the code ONLY on intital/first render

    return (
        <div>
            <h1>Counter  {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )

}

export default EffectTwo