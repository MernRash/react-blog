import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css";
import SignUP from "./Signup";
import UserProfile from "./userProfile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

function Login(props) {
  // const [isValid] = useState(false)

  const [emailValue,setEmail]=useState("");
  const [passValue,setPass] = useState("");
  
  const navigate = useNavigate();

  const [,setErr] = useState(null);
  let token ="";

  const clickHandler=(e)=>{
    e.preventDefault();

    const email = emailValue;
    const password = passValue;

    if(password.length<6 || email.length<6){
      setErr("too short");
      return;
    }
    setErr("")

    const body ={email,password}

    axios
    .post(
      "https://node-blog-backend-app.herokuapp.com/api/v1/auth/login",
      body
    ).then((res)=>{
      alert(res.data.message)
      
     console.log(res.data,"from login")
      token = res.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", "Signed");
      props.userSignedIn();
      navigate("/home", { replace: true });
    }).catch((res)=>{console.log(res)})
  }


  const [isNewUser, setIsNewUser] = useState(true);

  const user = localStorage.getItem("user");
  let userLoggedIn = true;

  if (user == null) {
    userLoggedIn = false;
  }


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
                  label="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter Email"
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  onChange={(e)=> setPass(e.target.value)}
                  fullWidth
                  required
                />
              </div>
              <div className="btn-container">
                <Button type="submit" onClick={clickHandler} className="btn" variant="contained">
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
const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    userSignedIn: () => {
      const authSignIn = localStorage.getItem("user");
      dispatch({ type: "login", data: authSignIn });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Login);