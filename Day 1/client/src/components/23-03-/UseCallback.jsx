import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"])
    }, [todos])

    return (
        <>
            <ChildComponent todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default UseCallback