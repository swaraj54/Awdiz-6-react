import { useState } from "react";

function Welcome() {
    const [isSignIn, setIsSignIn] = useState(false)
    console.log(isSignIn, "isSignIn")

    function Change() {
        setIsSignIn(!isSignIn)
    }

    return (
        <div>
            {isSignIn ? <button onClick={() => setIsSignIn(!isSignIn)}>Welcome, Logout!</button> :
                <button onClick={function () { setIsSignIn(!isSignIn) }}>Sign In</button>}

            {isSignIn ? <button onClick={Change}>Welcome, Logout!</button> :
                <button onClick={Change}>Sign In</button>}

            {isSignIn && <h1>Welcome isSignIn turned to true</h1>}
        </div>
    )
}

export default Welcome;


// if (condition) {
//     statement 1
// } else {
//     if (condition 2) {
//         statement 2
//     } else {
//         statement 3
//     }
// }

// condition ? (statement 1) : (condition2 ? statement 2 :  statement 3)
// condition && statement
// isSignIn &&  welcome 