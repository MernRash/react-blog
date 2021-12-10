import React,{useContext} from "react";
import "./latestCard.css";
import { Link,useParams } from "react-router-dom";
import { PostDataContext } from "../ContextData/PostsDataContext";
import Latest_Img from "../images/latest-article.jpg";

// const latestCardData = [
//   {
//     id: 1,
//     title: "Joshua Tree Overnight Adventure",
//     desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
//     catagory:"Travel",
//     date : "October 17"
    
//   },
//   {
//     id: 2,
//     title: "Joshua Tree Overnight Adventure",
//     desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
//     catagory:"Travel",
//     date : "October 17"
//   },
//   {
//     id: 3,
//     title: "Joshua Tree Overnight Adventure",
//     desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
//     catagory:"Travel",
//     date : "October 17"
//   },
//   {
//     id: 4,
//     title: "Joshua Tree Overnight Adventure",
//     desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
//     catagory:"Travel",
//     date : "October 17"
//   },
// ];

function LatestCard() {
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
              <img src={Latest_Img} alt="latest_article"></img>
            </div>

            <div className="latest-card-info-container">
              <span>
              <Link to={`/article/${item.id}`}> {item.title} </Link>
              </span>
              <p>
               {item.desc}
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
