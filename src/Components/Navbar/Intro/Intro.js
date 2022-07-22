import './Intro.css';
import React,{useEffect,useState} from "react";
import { Link } from 'react-router-dom';
// import { PostDataContext } from '../../ContextData/PostsDataContext';
import axios from 'axios';



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

    const [postData,setPostData] = useState([])

    useEffect(()=>{

       

            const token = localStorage.getItem("token");
            const url1 =
            "https://node-blog-backend-app.herokuapp.com/api/v1/blog/filterByClap";
            const config = { headers: { authorization: `Bearer ${token}` } };
      
            axios
              .get(url1, config)
              .then((res) => {
                setPostData(res.data.filterDataByClap);
              })
              .catch((err) => {
                console.log(err);
              });
       
    },[])

    // const postData = useContext(PostDataContext)
    return (
        <div className="Intro-Container">
            <div className="intro">

                {postData.filter((item)=>item.id===1).map(firstGalleryTab)}
                
                {postData.slice(2, 4).map(secondaryGalleryTab)}



            </div>
        </div >
    );
}

export default Intro;
