import React from 'react'
import { Increment, Decrement } from '../../redux/actions/Counter.actions'
import { useDispatch, useSelector } from 'react-redux'

const CounterRedux = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter) // state == store

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(Increment())}>+</button>
            <button onClick={() => dispatch(Decrement())}>-</button>
        </div>
    )
}

export default CounterRedux