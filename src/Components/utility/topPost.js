import React,{useContext} from "react";

import SectionTitle from "../utility/sectionTitle";
// import Latest_img from "../images/latest-article.jpg";
// import { ArticleData } from "../ContextData/ArticleContext";
import {PostDataContext} from '../ContextData/PostsDataContext';
import { Link } from "react-router-dom";


export default function TopPostContent(){

  const PostData = useContext(PostDataContext);
    return(
      
      <div className="top-post-conatiner">
      <div className="top-post-head">
        <SectionTitle text="Top Post" width={"35%"} />
      </div>
     
         
<div className="post-info-container">
              <div className="post-image-container">
                <img src={PostData[1].imgURL} alt="try-img"></img>
              </div>

              <div className="post-head-container">
              <Link to ={`/${PostData[1].category}/${PostData[1].id}`} >  <span id="post-title">{PostData[1].title}</span></Link>
                <span id="post-number">{PostData[1].id}</span>
              </div>

              <div className="catagory-container">
                <span id="cat-head">{PostData[1].category}</span>/<span>{PostData[1].date}</span>
              </div>
            </div>
         
        
      
      

      {PostData.slice(6,9).map((item) => {
        return (
          <div className="post-info-container1">
              <div className="post-image-container1">
                <img src={item.imgURL} alt="try-img"></img>
              </div>

              <div className="post-head-container1">
                    <div className="try_head">
                   <Link to ={`/${item.category}/${item.id}`} ><span id="post_title">{item.title}</span></Link>
                    {item.category}/{item.date}
                    </div>
                    
                    <span id="post_num">{item.id}</span>
                    
                  </div>
            </div>
          
         );
      })}
    </div> 
    )
}

