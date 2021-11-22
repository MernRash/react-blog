import React,{useContext} from "react";
import './postList.css';

import { PostDataContext } from "../ContextData/PostsDataContext";
import Latest_Img from '../images/latest-article.jpg';
import SectionTitle from "../utility/sectionTitle";
import { useParams,Link } from "react-router-dom";


function PostList(props){

    const PostData = useContext(PostDataContext);
    
    const {catagory} = useParams();
    console.log(catagory)
    return(
        <div>
            <SectionTitle text={catagory} width={"15%"} transform={"capitalize"} />
            {/* <h3>{catagory}</h3> */}

{PostData.map((item)=>{
    return(
        <div className="post-list-container">
               <div className="post-image-container">
                   <img src={Latest_Img} alt="try-post-img" />

               </div>

                <div className="post-data-container">
                  <Link to={`/${catagory}/${item.id}`} >  <h4>{item.title}</h4> </Link>
                    <p>{item.desc}</p>

                </div>
            </div>

    )
})}
            
        </div>
    )
}

export default PostList;