import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthDirection = () => {
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  console.log(state, state.user === null);

  useEffect(() => {
    if (state && state?.user === null) {
        // context, LS, (lasturl) = cuurent url, 
      toast.error("Login to access this page.");
      return router("/login");
    }
  }, [state]);
};

export default AuthDirection;
