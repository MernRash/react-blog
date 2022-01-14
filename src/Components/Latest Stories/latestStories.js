import React, { useState, useEffect } from "react";
import SectionTitle from "../utility/sectionTitle";
import { BsArrowDown } from "react-icons/bs";
import "./latestStories.css";
import axios from "axios";

import { Link } from "react-router-dom";

function LatestStories() {
  const [postNumber, setPostNumber] = useState(4);

  const [latestStories, setLatestData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem("token");
      const url1 =
        "https://node-blog-backend-app.herokuapp.com/api/v1/blog/filterByDate";
      const config = { headers: { authorization: `Bearer ${token}` } };

      axios
        .get(url1, config)
        .then((res) => {
          setLatestData(res.data.filterDataByDate);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 900);
  }, []);

  return (
    <div>
      <SectionTitle text="Latest Stories" width={"13%"} />
      <div className="stories-main-container">
        {latestStories.slice(1, postNumber).map((item, index) => {
          return (
            <div className="stories-container" key={index}>
              <Link to={`${item.category}/${item.id}`}>
                {" "}
                <h2>{item.title}</h2>{" "}
              </Link>
              <p>{item.desc.substring(0, 150)}</p>
              <p>{item.desc.substring(0, 200)}</p>
              <span>{item.category}</span>/<span>{item.date}</span>
            </div>
          );
        })}
      </div>
      <div className="more" onClick={() => setPostNumber(postNumber + 3)}>
        <span>VIEW MORE</span>
        <BsArrowDown style={{ color: "red" }} />
      </div>
    </div>
  );
}

export default LatestStories;
