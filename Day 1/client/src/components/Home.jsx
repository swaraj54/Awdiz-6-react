import { useContext } from "react";
import { MyCounterContext } from "./context/CounterContext";

function Home() {
    const { counter, Increment } = useContext(MyCounterContext);
    return (
        <div>
            <h1>Home Page welcome</h1>
            <h2>Counter : {counter} </h2>
            <button onClick={Increment}>+</button>
        </div>
    )
}


export default Home;