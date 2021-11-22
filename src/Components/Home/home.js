import React from "react";
import Gallery from "../Navbar/Vertical_Gallery/gallery";
import LatestCard from "../Latest Component/latestcards";
import SectionTitle from "../utility/sectionTitle";
import ArticleCard from "../Latest Articles/latestArticle";
import LatestStories from "../Latest Stories/latestStories";


function Home(){
    return(
        <div>
        <div className="Gallery-Container">
        <Gallery />

        </div>
        
        <div className="latest-card-container">
        <SectionTitle text="The Latest" />
        <LatestCard />   
        
        </div>

        <div className="article-container">
        <SectionTitle text="Latest Articles" width = {"15%"} />
      <ArticleCard />
        </div>

        <div className="latest-stories-container">
        <LatestStories />
        </div>
        </div>
    )
}

export default Home;