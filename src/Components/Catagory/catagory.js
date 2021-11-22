import React from 'react';
import PostList from './postsLists';
import TopPostContent from '../utility/topPost';
import AdvertiseCard from '../utility/Advertisement';
import "./category.css"

function Catagory(){

    return(
        <div className="common-main-container">
                <div className="div-articles">
                    <PostList/>
                </div>
                <div className="div-advt">
                    <TopPostContent/>
                    <AdvertiseCard/>
                </div>
            </div>
    )
}

export default Catagory;