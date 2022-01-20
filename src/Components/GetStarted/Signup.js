import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

function SignUP(props) {
  // console.log(props)
  const [fullName, setFullName] = useState("");
  const [passValue, setPassValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  
  // const [, setToken] = useState(() => localStorage.getItem("token" || ""));
  const [, setError] = useState(null);
  const navigate = useNavigate();

  let token ="";

  // const [error, setError] = useState(null);

  const submitData = (e) => {
    e.preventDefault();
    const name = fullName;
    const password = passValue;
    const email = emailValue;

    if (
      password.length < 6 &&
      email.length < 6 &&
      password.trim() === "" &&
      email.trim() === ""
    ) {
      setError("too Short!!!");
      return;
    }
    setError("");

   
    const body = { name, password, email };
    axios
      .post(
        "https://node-blog-backend-app.herokuapp.com/api/v1/auth/signup",
        body
      )
      .then((res) => {
      
        token = res.data.data.token;

        localStorage.setItem("token", token);
        localStorage.setItem("user", "Signed");
        localStorage.setItem("userSignedUP", "loggedIn");

    /* In React Router V6 history.push is replaced with UseNavigate and we can use it to navigate Url but to reRender we will bw using Reload command. */

        props.userSignedIn();
    navigate("/home", { replace: true });
      })
      .catch((err) => console.log(err.status, err.messege));

    
    // window.location.reload(false);
  };

  return (
    <div className="SignUp-Container">
      <h2>Sign UP</h2>
      <div className="input-container">
        <TextField
          label="Name"
          placeholder="Enter Name"
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          onChange={(e) => setPassValue(e.target.value)}
          type="password"
          fullWidth
          required
        />
        <TextField
          label="Email"
          placeholder="Enter Email"
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          fullWidth
          required
        />
        {/* <TextField
          label=""
          placeholder="D.O.B"
          type="date"
          fullWidth
          required
        /> */}
      </div>
      <div className="btn-container">
        <Button className="btn" variant="contained" onClick={submitData}>
          Sign Up
        </Button>
        <span onClick={props.isNewUser}>Already have an account? LogIn</span>
      </div>
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

export default connect(mapStateToProps, mapDispatchToState)(SignUP);
