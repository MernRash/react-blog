import React from "react";
import NavBar from "../Navbar/nav";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Catagory from "../Catagory/catagory";
import Blog from "../Blog/blog";
import Login from "../GetStarted/Login";

function Main() {
 
  let isLoggedin = localStorage.getItem("user");

  if (isLoggedin == null) {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/:catagory" element={<Login />} exact />
        </Routes>
      </>
    );
  }
  return (
    <div className="Main Conatiner">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/:catagory" element={<Catagory />} exact />
        <Route path="/:catagory/:id" element={<Blog />} exact />
        <Route path="/get-started" element={<Login />} exact />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  
  return {
    state,
  };
};

export default connect(mapStateToProps)(Main);
