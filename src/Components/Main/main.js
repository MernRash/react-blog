import React from "react";
import NavBar from "../Navbar/nav";
import {Routes,Route} from 'react-router-dom'
import Home from "../Home/home";
import Catagory from "../Catagory/catagory";
import Blog from "../Blog/blog";
import Login from "../GetStarted/Login";

function Main(){

    let isLoggedin = localStorage.getItem("user");

    if(isLoggedin == null){
        return <><Routes><Route path="/" element={<><NavBar /><Login /></>} exact />
        <Route path="/:catagory" element={<><NavBar /><Login /></>} exact/></Routes></>

    }
    return(
        <div className="Main Conatiner">
          
            <Routes>
                <Route path="/" element={<><NavBar /><Login /></>} />
                <Route path="/home" element={<><NavBar /><Home/></>} exact/>
                <Route path="/:catagory" element={<><NavBar /><Catagory /></>} exact/>
                <Route path="/:catagory/:id" element={<><NavBar /><Blog /></>} exact/>
                <Route path="/get-started" element={<><NavBar /><Login /></>} exact />
            </Routes>
        </div>
    )
}

export default Main;