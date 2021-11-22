import React from "react";
import "./latestCard.css";
import Latest_Img from "../images/latest-article.jpg";

const latestCardData = [
  {
    id: 1,
    title: "Joshua Tree Overnight Adventure",
    desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
    catagory:"Travel",
    date : "October 17"
    
  },
  {
    id: 2,
    title: "Joshua Tree Overnight Adventure",
    desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
    catagory:"Travel",
    date : "October 17"
  },
  {
    id: 3,
    title: "Joshua Tree Overnight Adventure",
    desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
    catagory:"Travel",
    date : "October 17"
  },
  {
    id: 4,
    title: "Joshua Tree Overnight Adventure",
    desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
    catagory:"Travel",
    date : "October 17"
  },
];

function LatestCard() {
  return (
   <div className="latest-flex">
      {latestCardData.map((item) => {
        return (
          <>
          <div className="latest-card-main-container" id={item.id}>
            <div className="latest-card-image-container">
              <img src={Latest_Img} alt="latest_article"></img>
            </div>

            <div className="latest-card-info-container">
              <span>
               {item.title}
              </span>
              <p>
               {item.desc}
              </p>

              <div className="catagory-info-container">
                <span id="cat-head">{item.catagory}</span>/<span>{item.date}</span>
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
