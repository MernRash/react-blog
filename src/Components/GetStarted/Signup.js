import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUP(props){
    
    return(
        <div className="SignUp-Container"> 
            <h2>Sign UP</h2>
            <div className="input-container">
            <TextField label='Name' placeholder='Enter Name' fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <TextField label='Email' placeholder='Enter Email' type="email" fullWidth required/>
            <TextField label='' placeholder='D.O.B' type='date' fullWidth required/>
            </div>
            <div className="btn-container">
            <Button className="btn" variant="contained">Sign Up</Button>
            <span onClick={props.showLogIn}>Already have an account? LogIn</span>
            </div>
            </div>
    )
}