import { useState } from "react";

function Register() {

    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    // userData.name
    // userData[name]
    console.log(userData, "userData")

    function handleChange(event) {
        // console.log(event.target.value, event.target.name)
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (userData.name && userData.email && userData.password && userData.confirmPassword) {
            // await calling backend one server to another server request, backend validation, data to store mongodb
            alert("Registeration COmpleted.")
        } else {
            alert("Alert all fields are required.")
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label><br />
                <input type="text" name="name" onChange={handleChange} required /><br />
                <label>Email : </label><br />
                <input type="email" name="email" onChange={handleChange} required /><br />
                <label>Password : </label><br />
                <input type="password" name="password" onChange={handleChange} required /><br />
                <label>Confirm Password : </label><br />
                <input type="password" name="confirmPassword" onChange={handleChange} required /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;