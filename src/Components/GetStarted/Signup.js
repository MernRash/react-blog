import React,{useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

export default function SignUP(props) {
  const [fullName, setFullName] = useState("");
  const [passValue, setPassValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [token,setToken] = useState(()=>localStorage.getItem("token" || ""));
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const submitData = (e) => {
   
    e.preventDefault();
    const name = fullName;
    const password = passValue;
    const email = emailValue;
    console.log(password, email);
    if (password.length < 6 || email.length < 6) {
      setError("too Short!!!");
      return;
    }
    setError("");

    localStorage.setItem("user", "Signed");
    console.log("here");

    const body = { name, password, email };
    axios
      .post("http://localhost:8000/api/v1/auth/signup", body)
      .then((res) =>{
       
       const token = res.data.data.token;
        setToken(res.data.data.token)
        console.log(res.data.data.token)
console.log(token);
        localStorage.setItem("token",token)
      })
      .catch((err) => console.log(err.status, err.messege));

      /* In React Router V6 history.push is replaced with UseNavigate and we can use it to navigate Url but to reRender we will bw using Reload command. */
      navigate('/home', {replace: true});
      window.location.reload(false);
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
