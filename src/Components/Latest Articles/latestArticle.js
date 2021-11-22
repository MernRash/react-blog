import React,{useContext} from "react";
import "./latestArticle.css";
import AdvertiseCard from "../utility/Advertisement";
import Latest_img from "../images/latest-article.jpg";
import ArticleContent from "../utility/articleContent";
import TopPostContent from "../utility/topPost";
import { BsArrowDown } from 'react-icons/bs';
import { CardDataContext } from "../ContextData/LatestCardContext";


function ArticleCard() {

  const latestCardData = useContext(CardDataContext)
  console.log(latestCardData);
  return (
    <div className="article-main-container">
      <div className="article-card-container">
      {
        latestCardData.map((item)=>{
          return(
            <ArticleContent imgSrc={Latest_img} title={item.title} desc={item.desc} catagory={item.catagory} date={item.date} />
          )
        })
      }

<div className="more">
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
