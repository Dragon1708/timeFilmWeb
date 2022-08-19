import React from "react";
import { useSelector } from 'react-redux'

import DB from "../../Assets/DB.json";
import FeaturedBlock from "../../Components/FeaturedBlock";
import CategoryVideoList from "../../Components/CategoryVideoList";
import "./Home.scss";

export default function Home() {
  const categories =useSelector(state=>state.CategoriesReducer)
  const videos =useSelector(state=>state.VideosReducer.watching)
   console.log(categories)

  // console.log(DB.categories.map((el)=>{
  //   return DB.videos.filter((eli)=>eli.id==="03")
  // }))
  
 // console.log(
 //     DB.videos.map((el)=>{
 //       return DB.categories.VideosID.filter((eli)=>eli===el.id)

  return (
    <section className="Home">
      <h1 className="Home__title">Recent</h1>
     <FeaturedBlock data={DB.watch[0]}/>
     {categories[0] && categories.map((el)=>{
     return <CategoryVideoList key={el.id} 
     data={el} 
     videos={el.VideosID.watch.map((abo)=>{
      return videos.find((ind)=>ind.id===abo)
     })}/>
     })

     }

  </section>
  );
}
