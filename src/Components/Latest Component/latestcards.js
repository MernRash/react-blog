import React,{useContext,useState,useEffect} from "react";
import "./latestCard.css";
import { Link,useParams } from "react-router-dom";
import { PostDataContext } from "../ContextData/PostsDataContext";
// import Latest_Img from "../images/latest-article.jpg";


function LatestCard() {

  // useEffect(()=>{

  //   const config = {params:{catagory},headers: {"authorization": `Bearer ${token}`}}
  //   const url = "https://node-blog-backend-app.herokuapp.com/api/v1/blog/"
  //   axios.get(url,config).then((res)=>{
  //     console.log(res.data.filteredData);
  //     setBlogs(res.data.filteredData);
  //   }).catch((err)=>console.error(err));
    
  // },[catagory])
  
  const blogs = useContext(PostDataContext)
  const filterPost = blogs.filter((values)=> values.views>=100);
  const { catagory } = useParams();
  console.log(catagory)
  console.log(filterPost);
  return (
   <div className="latest-flex">
      {filterPost.map((item,index) => {
        return (
          <>
          <div className="latest-card-main-container" key={index}>
            <div className="latest-card-image-container">
              <img src={item.imgURL} alt="latest_article"></img>
            </div>

            <div className="latest-card-info-container">
              <span>
              <Link to={`/article/${item.id}`}> {item.title} </Link>
              </span>
              <p>
               {item.desc.substring(0, 150)}
              </p>

              <div className="catagory-info-container">
                <span id="cat-head">{item.category}</span>/<span>{item.date}</span>
              </div>
            </div>
            </div>
          </>
        );
      })
    }
    </div>
    
  );
}

export default LatestCard;
