import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css";
import SignUP from "./Signup";
import UserProfile from "./userProfile";

export default function Login() {
  const [isNewUser, setIsNewUser] = useState(true);

  const user = localStorage.getItem("user");
  let userLoggedIn = true;

  if (user == null) {
    userLoggedIn = false;
  }

  useEffect(()=>{
      const oldUser = localStorage.getItem("userSignedUP");
      if(oldUser != null){
          setIsNewUser(false)
      }
  },[])

  return (
    <div className="log-in-container">
      {userLoggedIn ? (
        <UserProfile />
      ) : (
        <>
          {isNewUser ? (
            <SignUP isNewUser={() => setIsNewUser(!isNewUser)} />
          ) : (
            <form>
              <h2>LogIn</h2>
              <div className="input-container">
                <TextField
                  label="Username"
                  placeholder="Enter username"
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  required
                />
              </div>
              <div className="btn-container">
                <Button className="btn" variant="contained">
                  Login
                </Button>
                <span onClick={() => setIsNewUser(!isNewUser)}>
                  Don't have an account? SignUp
                </span>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}
