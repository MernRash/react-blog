import {createContext} from "react";
import Latest_img from "../images/latest-article.jpg";


const TempData = [
    {
      id: 1,
      title: "Catch waves with an Adventure Guide",
      image: Latest_img,
      catagory: "Travel",
      date: "October 17",
    },
    {
      id: 2,
      title: "Catch waves with an Adventure Guide",
      image: Latest_img,
      catagory: "Travel",
      date: "October 17",
    },
    {
      id: 3,
      title: "Catch waves with an Adventure Guide",
      image: Latest_img,
      catagory: "Travel",
      date: "October 17",
    },
    {
      id: 4,
      title: "Catch waves with an Adventure Guide",
      image: Latest_img,
      catagory: "Travel",
      date: "October 17",
    },
  ];

export  const ArticleData = createContext(TempData);