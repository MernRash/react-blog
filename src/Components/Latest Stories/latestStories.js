import React,{useContext} from "react";
import SectionTitle from "../utility/sectionTitle";
import { BsArrowDown } from 'react-icons/bs';
import './latestStories.css';
import { PostDataContext } from "../ContextData/PostsDataContext";
import { Link } from "react-router-dom";

function LatestStories(){
    const [postNumber,setPostNumber] = React.useState(4)

    const TempArr = useContext(PostDataContext);
    return(
        <div>
            <SectionTitle text="Latest Stories" width={"13%"} />
            <div className="stories-main-container">
        {
            TempArr.slice(1,postNumber).map((item)=>{
                return (
                    
                    <div className="stories-container">
                 <Link to ={`${item.category}/${item.id}`}> <h2>{item.title}</h2> </Link>
                    <p>{item.desc.substring(0,150)}</p>
                    <p>{item.desc.substring(0,200 )}</p>
                    <span>{item.category}</span>/<span>{item.date}</span>
                    </div>
                    
                )
            })
        }
        
    
        
        </div>
        <div className="more" onClick={()=> setPostNumber(postNumber + 3)}>
                        <span>VIEW MORE</span>
                        <BsArrowDown style={{color:"red"}}/>
                </div>
        </div>
    )
}

export default LatestStories;