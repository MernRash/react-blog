import React, { useState, useEffect } from "react";

import SectionTitle from "../utility/sectionTitle";
// import Latest_img from "../images/latest-article.jpg";
// import { ArticleData } from "../ContextData/ArticleContext";
// import {PostDataContext} from '../ContextData/PostsDataContext';
import { Link } from "react-router-dom";
import axios from "axios";

export default function TopPostContent() {
  const [topPostData, setTopPostData] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const url = "http://localhost:8000/api/v1/blog/filtertopPost";
    const config = { headers: { authorization: `Bearer ${token}` } };

    axios
      .get(url, config)
      .then((res) => {
        console.log(res);
        setTopPostData(res.data.sortedTopPost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  // const PostData = useContext(PostDataContext);
  return (
    <div className="top-post-conatiner">
      <div className="top-post-head">
        <SectionTitle text="Top Post" width={"35%"} />
      </div>

      <div className="post-info-container">
        {console.log("From TopPost", topPostData)}
        {topPostData.slice(0, 1).map((item, index) => {
          return (
            <div key={index}>
              <div className="post-image-container">
                <img src={item.imgURL} alt="try-img"></img>
              </div>

              <div className="post-head-container">
                <Link to={`/${item.category}/${item.id}`}>
                  {" "}
                  <span id="post-title">{item.title}</span>
                </Link>
                <span id="post-number">{item.id}</span>
              </div>

              <div className="catagory-container">
                <span id="cat-head">{item.category}</span>/
                <span>{item.date}</span>
              </div>
            </div>
          );
        })}
      </div>

      {topPostData.slice(1, 4).map((item, indx) => {
        return (
          <div className="post-info-container1" key={indx}>
            <div className="post-image-container1">
              <img src={item.imgURL} alt="try-img"></img>
            </div>

            <div className="post-head-container1">
              <div className="try_head">
                <Link to={`/${item.category}/${item.id}`}>
                  <span id="post_title">{item.title}</span>
                </Link>
                {item.category}/{item.date}
              </div>

              <span id="post_num">{item.id}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
