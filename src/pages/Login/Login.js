import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../index";
import logo from "../../imgs/chatterbox-logo1.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/chats");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/chats");
    }
  }, [user]);
  return (
    <div className="logIn-container">
      <img src={logo} alt="ChatterBox Logo" />
      <div className="google-button">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}

export default Login;
