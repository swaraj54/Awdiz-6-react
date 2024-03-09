import React, { useReducer } from 'react'

const Reducer = (state, action) => {
    console.log(state, action.payload, "state , action")
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + action.payload }
        // { ...userData, [event.target.name] : event.target.value }
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 }
        case "RESET":
            return { ...state, counter: 0 }
        default:
            return state;
    }
}

const InititalState = { counter: 0, counter2: 12 }

const UseReducer = () => {

    const [state, dispatch] = useReducer(Reducer, InititalState)

    console.log(state, "state")
    function Increment() {
        dispatch({ type: "INCREMENT", payload: 10 })
    }
    function Decrement() {
        dispatch({ type: "DECREMENT" })
    }
    function Reset() {
        dispatch({ type: "RESET" })
    }
    return (
        <div>
            <h1>Counter : {state.counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default UseReducer