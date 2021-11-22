import React from "react";
import './blog.css';
import Banner from "../images/post-hero-img.png";
import VS_Code from "../images/code-ss-post.png";
import Clap from "../images/clap.png";
import Share from "../images/share.png";
import Author from "../Author/author";
import More from "../utility/more";
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa'



export default function Blog(){

    return(
        <>
        <div className="blog-main-container">
              <div className="icons-container">
                    <div><img src={Clap} alt="clap-img"/><span>9.3K claps</span></div>
                    <br/>
                    <br/>
                    <div><img src={Share} alt="share-img"/><span>Share this article</span></div>
                </div>
                <h2>5 Ways to animate a React app</h2>
                <hr/>
                <div className="author-info">
                    <Author name="Dmitry Nozhenko"/>
                    <div className="author-social-profiles">
                        <FaFacebookSquare/>
                        <FaTwitterSquare/>
                        <FaInstagramSquare/>
                        <FaYoutubeSquare/>
                    </div>
                </div>
                <hr/>
                <img src={Banner} alt="react-banner" />
                <p>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. Let’s talk about them</p>
                <img src={VS_Code} alt="blog-img" />
                <div className="blog-keyword-container">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Animation</span>
                    <br/>
                    <div><img src={Clap} alt="clap-img" />
                    <span>9.3K claps</span></div>

                    <div className="WritenBy-details">
                    <Author name="Dmitry Nzhenko" />
                    </div> 
                </div>
            
        </div>
        <More />
        </>
    )
}