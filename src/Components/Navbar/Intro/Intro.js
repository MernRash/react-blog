import './Intro.css';
import React,{useContext} from "react";
import { Link } from 'react-router-dom';
import { PostDataContext } from '../../ContextData/PostsDataContext';



function firstGalleryTab(Data) {
    return <div key={Data.id} style={{ backgroundImage: `url(${Data.imgURL})` }} className="hero-cover">
        <div className="home-hero-title">

            <Link to={`/${Data.category}/${Data.id}`}>
                <div>
                    {Data.title}
                </div>
            </Link>
            <div className="home-hero-title-date">{Data.category}{Data.time}</div>
        </div>
    </div>
}

function secondaryGalleryTab(Data) {
    return <div key={Data.id} className="second-cover">
        <img className="second-cover-gird-img" src={Data.imgURL} alt="cover=2" />
        <div className="home-second-title">
            <Link to={`/${Data.category}/${Data.id}`}>
                <div>
                    {Data.title}
                </div>
            </Link>
            <div className="home-hero-title-date">  {Data.category} {Data.time} </div>
        </div>
    </div>

}

function Intro() {
    const PostData = useContext(PostDataContext)
    return (
        <div className="Intro-Container">
            <div className="intro">

                {PostData.filter((item)=>item.id===1).map(firstGalleryTab)}
                
                {PostData.slice(2, 4).map(secondaryGalleryTab)}



            </div>
        </div >
    );
}

export default Intro;
