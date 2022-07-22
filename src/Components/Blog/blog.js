import React, { useState, useEffect } from "react";
import "./blog.css";
import Clap from "../images/clap.png";
import Share from "../images/share.png";
import Author from "../Author/author";
import More from "../utility/more";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useParams } from "react-router";
import axios from "axios";

export default function Blog() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      params: { blogId: id },
      headers: { authorization: `Bearer ${token}` },
    };
    const url =
      "https://node-blog-backend-app.herokuapp.com/api/v1/blog/singlePost";
    axios
      .get(url, config)
      .then((res) => {
        return setBlog(res.data.blogMatchById);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const clapIncrease = () => {
    let URL =
      "https://node-blog-backend-app.herokuapp.com/api/v1/claps/updateClap";
    const config = {
      params: { blogId: id },
      headers: { authorization: `Bearer ${token}` },
    };

    axios
      .post(URL, null, config)
      .then((res) => setBlog(res.data.blogMatchById))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {blog ? (
        <>
          <div className="blog-main-container">
            <div className="icons-container">
              <div onClick={clapIncrease}>
                <img src={Clap} alt="clap-img" />
                <span>{blog.claps}claps</span>
              </div>
              <br />
              <br />
              <div>
                <img src={Share} alt="share-img" />
                <span>Share this article</span>
              </div>
            </div>

            <>
              <h2>{blog.title}</h2>
              <hr />
              <div className="author-info" key={blog.id}>
                <Author name={blog.author} />
                <div className="author-social-profiles">
                  <FaFacebookSquare />
                  <FaTwitterSquare />
                  <FaInstagramSquare />
                  <FaYoutubeSquare />
                </div>
              </div>
              <hr />

              <p>{blog.desc}</p>
              <img src={blog.imgURL} alt="blog-img" />

              <div className="blog-keyword-container">
                <br />
                <div onClick={clapIncrease}>
                  <img src={Clap} alt="clap-img" />
                  <span>{blog.claps} claps</span>
                </div>

                <div className="WritenBy-details">
                  <Author name={blog.author} />
                </div>
              </div>
            </>
          </div>

          <More />
        </>
      ) : null}
    </>
  );
}
