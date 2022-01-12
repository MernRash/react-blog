import React,{useEffect,useState} from "react";
import "./latestArticle.css";
import AdvertiseCard from "../utility/Advertisement";
// import Latest_img from "../images/latest-article.jpg";
import ArticleContent from "../utility/articleContent";
import TopPostContent from "../utility/topPost";
import { BsArrowDown } from 'react-icons/bs';
import axios from "axios";
// import {PostDataContext} from '../ContextData/PostsDataContext';
import { Link } from "react-router-dom";


function ArticleCard() {
  const [postNumber, setPostNumber] = useState(6);
  const token = localStorage.getItem("token");
  const [latestData,setLatestData] = useState([]);


useEffect(()=>{
 const url1 = "http://localhost:8000/api/v1/blog/filterByDate";
    const config = { headers: {"authorization": `Bearer ${token}`}}

    axios.get(url1, config).then((res)=> {
      console.log(res)
      setLatestData(res.data.filterDataByDate)
    }).catch((err)=> {
      console.log(err)
    })
},[token])
  // const latestCardData = useContext(PostDataContext)
  // console.log(latestCardData);
  return (
    <div className="article-main-container">
      <div className="article-card-container">
      {
        latestData.slice(3,postNumber).map((item)=>{
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
