import React from "react";
import './latestCard.css';
import Latest_Img from '../images/latest-article.jpg';


function LatestCard(){

    return(
        <div className="latest-card-main-container">
            <div className="latest-card-image-container">
                <img src={Latest_Img} alt="latest_article"></img>
            </div>

            <div className="latest-card-info-container">
                <span>Joshua Tree <br />
                     Overnight Adventure</span>
                <p>Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.</p>
            </div>

        </div>
    )
}

export default LatestCard;