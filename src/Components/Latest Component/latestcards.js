import React,{useState,useEffect} from "react";
import "./latestCard.css";
import { Link } from "react-router-dom";
// import { PostDataContext } from "../ContextData/PostsDataContext";

import axios from "axios";
// import Latest_Img from "../images/latest-article.jpg";


function LatestCard() {
  // const {id} = useParams();
  const token = localStorage.getItem("token");
  const [dataForMost, setDataForMost] = useState([]);

  useEffect(()=> {
    // const url = "https://blog-back-end-01.herokuapp.com/api/v1/blogs/filterByClap";
    const url1 = "https://node-blog-backend-app.herokuapp.com/api/v1/blog/filterByClap";
    const config = { headers: {"authorization": `Bearer ${token}`}}

    axios.get(url1, config).then((res)=> {
      console.log(res)
      setDataForMost(res.data.filterDataByClap)
    }).catch((err)=> {
      console.log(err)
    })
  },[token])

  // useEffect(()=>{

  //   const config = {params:{ blogId : id },headers: {"authorization": `Bearer ${token}`}}
  //   const url = "http://localhost:8000/api/v1/home/"
  //   axios.get(url,config).then((res)=>{
  //     console.log(res,"Response from backend");
  //     // setBlogs(res.data.filteredData);
  //   }).catch((err)=>console.error(err));
    
  // },[id,token])
  
  // const blogs = useContext(PostDataContext)


  // const filterPost = blogs.filter((values)=> values.views>=100);
  // // const { catagory } = useParams();
  // console.log(catagory)
  // console.log(filterPost);
  return (
   <div className="latest-flex">
      {dataForMost.slice(0,4).map((item,index) => {
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
