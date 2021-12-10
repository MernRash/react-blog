import { createContext } from "react"


const PostData=[
  {
        id:1,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"travel",
      date : "October 17",
      views:50,
      
    },
    {
        id:2,
        title:"5 Ways of animating React",
        desc: "Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. Let’s talk about them",
        category:"hollywood",
      date : "October 17",
      views:60
    },
    {
        id:3,
        title:"Dal Makahni Recipie",
        desc: "See Youtube for The recipie.See Youtube for The recipie.See Youtube for The recipie. It has a plethora pf temples and places.",
        category:"food",
      date : "October 17",
      views:100
    },
    {
        id:4,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"technology",
      date : "October 17",
      views:100
    },
    {
        id:5,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"food",
      date : "October 17",
      views:100
    },
    {
        id:6,
        title:"Catch waves with an Adventure Guide",
        desc: "It has a plethora pf temples and places.It has a plethora pf temples and places.It has a plethora pf temples and places.It has a plethora pf temples and places.It has a plethora pf temples and places.",
        category:"technology",
      date : "October 17",
      views:90
    },
    {
        id:7,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"hollywood",
      date : "October 17",
      views:100
    },
  {
        id:8,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"hollywood",
      date : "October 17",
      views:40
    },
    {
        id:9,
        title:"5 Ways of animating React",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"food",
      date : "October 17",
      views:60
    },
    {
        id:10,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"bollywood",
      date : "October 17",
      views:20
    },
    {
        id:11,
        title:"Antim Hai Bhai",
        desc: "Antim Is Released In Cinemas on Nove 25, Friday.Antim Is Released In Cinemas on Nove 25, Friday.Antim Is Released In Cinemas on Nove 25, Friday.Antim Is Released In Cinemas on Nove 25, Friday.",
        category:"bollywood",
      date : "October 17",
      views:10
    },
    {
        id:12,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"food",
      date : "October 17",
      views:40
    },
    {
        id:13,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"travel",
      date : "October 17",
      views:50
    },
    {
        id:14,
        title:"Catch waves with an Adventure Guide",
        desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
        category:"travel",
      date : "October 17",
      views:50
    },
    {
      id:15,
      title:"Weight Loss Tips",
      desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
      category:"fitness",
    date : "October 17",
      views:95
  },
  {
      id:16,
      title:"Catch waves with an Adventure Guide",
      desc: "Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has a plethora pf temples and places.",
      category:"fitness",
    date : "October 17",
      views:70
  }
  ]



export const PostDataContext = createContext(PostData);