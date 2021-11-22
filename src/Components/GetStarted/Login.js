import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css';
import SignUP from './Signup';


export default function Login(){
const [showLogIn,setShowLogIn] = useState(true);
    return(
        <div className="log-in-container">
        {
            showLogIn ? 
            <SignUP showLogIn = {()=>setShowLogIn(!showLogIn)}/>
            :
            

            <form>
                <h2>LogIn</h2>
                <div className="input-container">
            <TextField label='Username' placeholder='Enter username' fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            </div>
            <div className="btn-container">
            <Button className="btn" variant="contained">Login</Button>
            <span onClick={()=>setShowLogIn(!showLogIn)}>Don't have an account? SignUp</span>
            </div>
            </form>
        
        }
       </div>
    )
}