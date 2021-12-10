import React,{useContext} from "react";
import { PostDataContext } from "../../ContextData/PostsDataContext";
import './gallery.css';




function Gallery(){
    const blogs = useContext(PostDataContext)
    const filterPost = blogs.filter((values)=> values.views>=100);
    console.log(filterPost);
    return(
        <>
        <div className="Gallery-1">

        <div className="img-1">
           <h2>Title of Vertical Gallery</h2>
           <p className="catg">Travel / August 21 2017</p>
        </div>
        <div className="img-2">
        <h2>The sound cloud You loved is Dommed</h2>
        <p className="catg1">Travel / August 21 2017</p>
        </div>
        <div className="img-3">
        <h2>The sound cloud You loved is Dommed</h2>
        <p className="catg2">Travel / August 21 2017</p>
        </div>
        </div>
        </>

    )
}

export default Gallery;