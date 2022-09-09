import React from "react";
import { useSelector } from 'react-redux'

import DB from "../../Assets/DB.json";
import FeaturedBlock from "../../Components/FeaturedBlock";
import CategoryVideoList from "../../Components/CategoryVideoList";
import "./Home.scss";

export default function Home() {
  const categories =useSelector(state=>state.CategoriesReducer)
  const videos =useSelector(state=>state.VideosReducer.watching)
   
  console.log(videos, "Homee")
  //   return DB.videos.filter((eli)=>eli.id==="03")
  // }))
  
 // console.log(
 //     DB.videos.map((el)=>{
 //       return DB.categories.VideosID.filter((eli)=>eli===el.id)

  return (
    <section className="Home">
      <h1 className="Home__title">Recent</h1>
     <FeaturedBlock data={DB[0].watch[0]}/>
     {categories[0] && categories.map((el)=>{
      console.log(el)
      if (el.id!=='00') {
        return <CategoryVideoList key={el.id} 
        category={el} 
        videos={videos.filter(index=>index.categoriesID.includes(el.id) )}
        />
      }
    
     })

     }

  </section>
  );
}
