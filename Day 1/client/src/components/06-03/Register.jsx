import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../AxiosConfig";

function Register() {
  const router = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });
  // userData.name
  // userData[name]
  console.log(userData, "userData");

  function handleChange(event) {
    // console.log(event.target.value, event.target.name)
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleSelect(event) {
    setUserData({ ...userData, ["role"]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      // await calling backend one server to another server request, backend validation, data to store mongodb
      try {
        const response = await api.post("/api/v1/user/register", {
          userData,
        });
        // const response = { data: { success: true, message: "Registeration Completed." } }
        // return res.status(201).json({ success: true, message: "Registeration Completed." })
        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "buyer",
          });
          toast.success(response.data.message);
          router("/login");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      alert("All fields are required.");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email : </label>
        <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <br />
        <label>Confirm Password : </label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <select onChange={handleSelect}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
