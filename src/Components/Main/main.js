import React from "react";
import NavBar from "../Navbar/nav";
import {Routes,Route} from 'react-router-dom'
import Home from "../Home/home";
import Catagory from "../Catagory/catagory";
import Blog from "../Blog/blog";

function Main(){

    return(
        <div className="Main Conatiner">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:catagory" element={<Catagory />} exact/>
                <Route path="/:catagory/:id" element={<Blog />} exact/>
            </Routes>
        </div>
    )
}

export default Main;