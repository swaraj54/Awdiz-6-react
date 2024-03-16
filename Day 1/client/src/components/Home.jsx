import { useContext } from "react";
import { MyCounterContext } from "./context/CounterContext";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./global/Navbar";

function Home() {
    const { counter, Increment } = useContext(MyCounterContext);
    const { state } = useContext(AuthContext)
    // const { theme } = useContext(ThemeContext)
    console.log(state, "state")
    return (
        // <div style={{ background: theme === light ? "white" : 'black' }}>
        <div >
            <h1>Home Page welcome - {state?.user?.name}</h1>
            <h2>Counter : {counter} </h2>
            <button onClick={Increment}>+</button>
        </div>
    )
}


export default Home;