import React from "react";

export default function ArticleContent(props) {
  return (
    <div className="article-content-container">
      <div className="article-image-container">
        <img src={props.imgSrc} alt="try-img"></img>
      </div>

      <div className="article-info-conatiner">
        <div className="artilce-title-container">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>

        <span>
          {props.catagory}/{props.date}
        </span>
      </div>
    </div>
  );
}
