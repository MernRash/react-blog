import React from "react";
import Latest_Img from '../images/latest-article.jpg'
import Author from "../Author/author";
import './style.css';

function More(props){

    return(
        <div className="more-card-container">
            <h4>More from the Siren</h4>
            <hr />
            <div className="card-container">
            <div>
                <span>Also tagged ReactJS</span>
                <img src={props.imgURL} alt="blog_img"></img>
                <h2>{props.title}</h2>
                <Author name = {props.author} />
            </div>
//             <div>
//                 <span>Related Reads</span>
//                 <img src={Latest_Img} alt="blog_img"></img>
//                 <h2>Joshua Tree Overnight Adventure</h2>
//                 <Author />
//             </div>
//             <div>
//                 <span>Related Reads</span>
//                 <img src={Latest_Img} alt="blog_img"></img>
//                 <h2>Joshua Tree Overnight Adventure</h2>
//                 <Author />
//             </div>
            </div>
        </div>
    )
}

export default More;
