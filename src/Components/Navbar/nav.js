import React,{useState} from 'react';
import './nav.css';
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {NavLink} from "react-router-dom";

function NavBar(){
    const [showNavLinks, setShowNavLinks]=useState(false);
        
        const navLinks = [
            {to:"/", catagory:"Home"},
            {to:"/bollywood", catagory:"Bollywood"},
            {to:"/technology", catagory:"Technology"},
            {to:"/hollywoood", catagory:"Hollywoood"},
            {to:"/fitness", catagory:"Fitness"},
            {to:"/food", catagory:"Food"},
            {to:"/get-started", catagory:"GetStarted"},

        ]
        return(
            <>
            <nav>
                <div className="Logo">
                    <h4 className="logo-head">The</h4>
                    <span>Siren</span>
                </div>

                <div className="head-list">
                    <ul className={showNavLinks?"nav-links-mobile":"nav-links"}>
                      {
                          navLinks.map((item)=>{
                              return(
                            <li><NavLink to={item.to} activeClassName="active" exact>{item.catagory} </NavLink> </li>
                          )})
                      }
                    </ul>
                    <div className="hamburg-menu" onClick={()=>setShowNavLinks(!showNavLinks)}>
                   {showNavLinks?<HiOutlineX />:<HiMenu/>}
                </div>
                </div>

                
            </nav>
            </>
        )
    }



export default NavBar;