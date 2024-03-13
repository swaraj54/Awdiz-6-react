import { useContext } from "react";
import { MyCounterContext } from "./context/CounterContext";
import { AuthContext } from "./context/AuthContext";

function Home() {
    const { counter, Increment } = useContext(MyCounterContext);
    const { state } = useContext(AuthContext)
    console.log(state, "state")
    return (
        <div>
            <h1>Home Page welcome - {state?.user?.name}</h1>
            <h2>Counter : {counter} </h2>
            <button onClick={Increment}>+</button>
        </div>
    )
}


export default Home;