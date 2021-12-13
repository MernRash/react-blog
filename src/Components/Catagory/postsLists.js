import React, { useContext, useState, useEffect } from "react";
import "./postList.css";
import { BsArrowDown } from 'react-icons/bs';
import { PostDataContext } from "../ContextData/PostsDataContext";
// import Latest_Img from "../images/latest-article.jpg";
import SectionTitle from "../utility/sectionTitle";
import { useParams, Link } from "react-router-dom";

function PostList(props) {
  const [count, setcount] = useState(2);
  const PostData = useContext(PostDataContext);
  const { catagory } = useParams();
  console.log(catagory)

  const updateCount = () => {
    setcount((prev) => prev + 2);
  };
  useEffect(() => {
    setcount(2);
  }, [catagory]);

  // const {id} = useParams();
  const filterBlogs = PostData.filter((values)=> values.category===catagory);
  console.log(PostData.filter((values)=> values.category===catagory));
  return (
    <div>
      <SectionTitle text={catagory} width={"15%"} transform={"capitalize"} />

      {filterBlogs.slice(0,count).map((values,index) => {
        return (
          <div className="post-list-container" key={index}>
            <div className="post-image-container">
              <img src={values.imgURL} alt="try-post-img" />
            </div>

            <div className="post-data-container">
              <Link to={`/${catagory}/${values.id}`}>
                {" "}
                <h4>{values.title}</h4>{" "}
              </Link>
              <p>{values.desc.substring(0,150)}</p>
            </div>
          </div>
        );
      })}

<div className="more" onClick={updateCount}>
                        <span >LOAD MORE</span>
                        <BsArrowDown style={{color:"red"}}/>
                    </div>
    </div>
  );
}

export default PostList;
