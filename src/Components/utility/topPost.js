import React,{useContext} from "react";

import SectionTitle from "../utility/sectionTitle";
import Latest_img from "../images/latest-article.jpg";
import { ArticleData } from "../ContextData/ArticleContext";


export default function TopPostContent(){

  const TempData = useContext(ArticleData);
    return(
      
      <div className="top-post-conatiner">
      <div className="top-post-head">
        <SectionTitle text="Top Post" width={"35%"} />
      </div>
      <div className="post-info-container">
              <div className="post-image-container">
                <img src={Latest_img} alt="try-img"></img>
              </div>

              <div className="post-head-container">
                <span id="post-title">Catch waves with an Adventure Guide</span>
                <span id="post-number">1</span>
              </div>

              <div className="catagory-container">
                <span id="cat-head">Travel</span>/<span>October 17</span>
              </div>
            </div>
      {TempData.slice(1).map((item) => {
        return (
          <div className="post-info-container1">
              <div className="post-image-container1">
                <img src={item.image} alt="try-img"></img>
              </div>

              <div className="post-head-container1">
                    <div className="try_head">
                    <span id="post_title">{item.title}</span>
                    {item.catagory}/{item.date}
                    </div>
                    
                    <span id="post_num">{item.id}</span>
                    
                  </div>
            </div>
          
         );
      })}
    </div> 
    )
}

