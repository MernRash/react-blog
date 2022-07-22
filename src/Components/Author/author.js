import React from "react";
import Author_Img from '../images/avatar.png'
import './author.css';


function Author(props){

    return(
        <div className="author-container">
             <img src={Author_Img} alt="author-img"/>
                <div> 
                    <span>{props.name}</span>
                    <p>Jan 28, 2019 · 10 min read</p>
                </div>

        </div>
    )
}

export default Author;