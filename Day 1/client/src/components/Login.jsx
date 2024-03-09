import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {

    const router = useNavigate()

    const [userData, setUserData] = useState({ email: "", password: "" })
    // userData.name
    // userData[name]
    console.log(userData, "userData")

    function handleChange(event) {
        // console.log(event.target.value, event.target.name)
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (userData.email && userData.password) {
            // await calling backend one server to another server request, backend validation, data to store mongodb
            try {
                // const response = await axios.post('http://localhost:8080/login', { userData })
                const response = { data: { success: true, message: "Login Sucessfull." } }
                // return res.status(201).json({ success: true, message: "Registeration Completed." })
                if (response.data.success) {
                    setUserData({ email: "", password: "" })
                    toast.success(response.data.message)
                    router('/')
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            alert("All fields are required.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email : </label><br />
                <input type="email" name="email" value={userData.email} onChange={handleChange} required /><br />
                <label>Password : </label><br />
                <input type="password" name="password" value={userData.password} onChange={handleChange} required /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}


export default Login;