import React,{useContext} from "react";
import './blog.css';
import { PostDataContext } from "../ContextData/PostsDataContext";
import Banner from "../images/post-hero-img.png";
// import VS_Code from "../images/code-ss-post.png";
import Clap from "../images/clap.png";
import Share from "../images/share.png";
import Author from "../Author/author";
import More from "../utility/more";
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa'
import { useParams } from "react-router";

// function relatedCards(data){
//     return  <div className="more-card-container">
//     <h4>More from the Siren</h4>
//     <hr />
//     <div className="card-container">
//     <div>
//         <span>Also tagged ReactJS</span>
//         <img src={data.imgURL} alt="blog_img"></img>
//         <h2>{data.title}</h2>
//         <Author name={data.author}/>
//     </div>
//     </div>
//     </div>
// }

export default function Blog(){

    const {id} = useParams();
    console.log(id)
    const PostData = useContext(PostDataContext);
    const filterPostData = PostData.filter((values)=>values.id === +id)
    
    return(
        <>
      
        <div className="blog-main-container">
              <div className="icons-container">
                    <div><img src={Clap} alt="clap-img"/><span>9.3K claps</span></div>
                    <br/>
                    <br/>
                    <div><img src={Share} alt="share-img"/><span>Share this article</span></div>
                </div>
                {filterPostData.map((values)=>(
                    <>
                <h2>{values.title}</h2>
                <hr/>
                <div className="author-info">
                    <Author name={values.author}/>
                    <div className="author-social-profiles">
                        <FaFacebookSquare/>
                        <FaTwitterSquare/>
                        <FaInstagramSquare/>
                        <FaYoutubeSquare/>
                    </div>
                </div>
                <hr/>
                <img src={Banner} alt="react-banner" />
                <p>{values.desc}</p>
                <img src={values.imgURL} alt="blog-img" />
                    
                     <div className="blog-keyword-container">
                    {values.tags.map((item)=>{
                        return (
                            <span>{item}</span>
                        )
                    })}
                    <br/>
                    <div><img src={Clap} alt="clap-img" />
                    <span>9.3K claps</span></div>

                    <div className="WritenBy-details">
                    <Author name={values.author} />
                    </div> 
                </div>
                
                </>))}
               
            
        </div>

            <More />
           
        </>
    )
}
