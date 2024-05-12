import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import api from "../AxiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar2 = ({ search, handleChange }) => {
  const { state, LOGOUT } = useContext(AuthContext);
  const router = useNavigate();

  async function Logout() {
    try {
      const response = await api.get("/api/v1/user/logout");
      if (response.data.success) {
        LOGOUT();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h2>Search Products from Navbar</h2>
      <input placeholder="Mens.." value={search} onChange={handleChange} />
      {state?.user?.name && <h1>Hello! {state?.user?.name}</h1>}
      {state?.user?.role ? (
        <h1 onClick={Logout}>Logout</h1>
      ) : (
        <h2 onClick={() => router("login")}>Login</h2>
      )}
    </div>
  );
};

export default Navbar2;
