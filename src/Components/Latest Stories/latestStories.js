import React,{useContext} from "react";
import SectionTitle from "../utility/sectionTitle";
import { BsArrowDown } from 'react-icons/bs';
import './latestStories.css';
import { CardDataContext } from "../ContextData/LatestCardContext";

function LatestStories(){

    const TempArr = useContext(CardDataContext);
    return(
        <div>
            <SectionTitle text="Latest Stories" width={"13%"} />
            <div className="stories-main-container">
        {
            TempArr.slice(1,4).map((item)=>{
                return (
                    
                    <div className="stories-container">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                    <span>{item.catagory}</span>/<span>{item.date}</span>
                    </div>
                    
                )
            })
        }
        
    
        
        </div>
        <div className="more">
                        <span>VIEW MORE</span>
                        <BsArrowDown style={{color:"red"}}/>
                </div>
        </div>
    )
}

export default LatestStories;