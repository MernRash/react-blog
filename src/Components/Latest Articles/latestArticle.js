import React,{useContext,useState} from "react";
import "./latestArticle.css";
import AdvertiseCard from "../utility/Advertisement";
// import Latest_img from "../images/latest-article.jpg";
import ArticleContent from "../utility/articleContent";
import TopPostContent from "../utility/topPost";
import { BsArrowDown } from 'react-icons/bs';
import {PostDataContext} from '../ContextData/PostsDataContext';
import { Link } from "react-router-dom";


function ArticleCard() {
  const [postNumber, setPostNumber] = useState(6);
  const latestCardData = useContext(PostDataContext)
  console.log(latestCardData);
  return (
    <div className="article-main-container">
      <div className="article-card-container">
      {
        latestCardData.slice(3,postNumber).map((item)=>{
          return(
          <Link to={`/${item.category}/${item.id}`}> <ArticleContent imgSrc={item.imgURL} title={item.title} desc={item.desc.substring(0, 150)} catagory={item.category} date={item.date} /></Link> 
          )
        })
      }

<div className="more" onClick={()=> setPostNumber(postNumber + 2)}>
                        <span>LOAD MORE</span>
                        <BsArrowDown style={{color:"red"}}/>
                    </div>

      <div className="articles-main-img">
      <h2>Title of vertical gallery</h2>
      <p>Travel / August 21 2017</p>
      </div>

      </div>
      <div className="post-advertisement-container">
        <div className="containerText">
          <AdvertiseCard />
        </div>

        <TopPostContent />
          
      </div>
    </div>
  );
}

export default ArticleCard;
