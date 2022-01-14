import React, { useState, useEffect } from "react";
import "./latestCard.css";
import { Link } from "react-router-dom";
import axios from "axios";

function LatestCard() {
  const [dataForMost, setDataForMost] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem("token");
      const url1 =
        "https://node-blog-backend-app.herokuapp.com/api/v1/blog/filterByClap";
      const config = { headers: { authorization: `Bearer ${token}` } };

      axios
        .get(url1, config)
        .then((res) => {
          setDataForMost(res.data.filterDataByClap);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  }, []);

  return (
    <div className="latest-flex">
      {dataForMost.slice(0, 4).map((item, indx) => {
        return (
          <div className="latest-card-main-container" key={indx}>
            <div className="latest-card-image-container">
              <img src={item.imgURL} alt="latest_article"></img>
            </div>

            <div className="latest-card-info-container">
              <span>
                <Link to={`/article/${item.id}`}> {item.title} </Link>
              </span>
              <p>{item.desc.substring(0, 150)}</p>

              <div className="catagory-info-container">
                <span id="cat-head">{item.category}</span>/
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LatestCard;
