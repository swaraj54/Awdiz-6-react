import React, { useState } from 'react'
import { createContext } from 'react';

export const MyCounterContext = createContext();

// HOC Higher order component - props component
const ProviderCounterContext = ({ children }) => { //  children - <App/>
    const [counter, setCounter] = useState(1)
    function Increment() {
        setCounter(counter + 1)
    }
    return (
        <MyCounterContext.Provider value={{ counter, Increment }}>
            {children}
        </MyCounterContext.Provider>
    )
}

export default ProviderCounterContext