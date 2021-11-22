import {createContext} from "react";


const latestCardData = [
    {
      id: 1,
      title: "Joshua Tree Overnight Adventure",
      desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
      catagory:"Travel",
      date : "October 17"
      
    },
    {
      id: 2,
      title: "Joshua Tree Overnight Adventure",
      desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
      catagory:"Travel",
      date : "October 17"
    },
    {
      id: 3,
      title: "Joshua Tree Overnight Adventure",
      desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
      catagory:"Travel",
      date : "October 17"
    },
    {
      id: 4,
      title: "Joshua Tree Overnight Adventure",
      desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
      catagory:"Travel",
      date : "October 17"
    },
  ];


  export const CardDataContext = createContext(latestCardData);