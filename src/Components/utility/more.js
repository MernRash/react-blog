import React, { useContext } from "react";
import Author from "../Author/author";
import "./style.css";
import { PostDataContext } from "../ContextData/PostsDataContext";
import { Link } from "react-router-dom";

function More() {
  const postData = useContext(PostDataContext);
  return (
    <div className="more-card-container">
      <h4>More from the Siren</h4>
      <hr />
      {console.log(postData)}
      <div className="card-container">
        {postData.slice(1, 4).map((value,indx) => {
            return <div key={indx}>
            <strong><span>Also tagged ReactJS</span></strong>
            <br />
            <img src={value.imgURL} alt="blog_img"></img>
           <Link onClick={()=>window.scrollTo(0,0)} to={`/${value.category}/${value.id}`} > <h2>{value.title}</h2> </Link>
            <Author name={value.author} />
          </div>
        })}
      </div>
    </div>
  );
}

export default More;
