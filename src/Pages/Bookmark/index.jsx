import React from "react";

import { Link} from "react-router-dom";
import { useSelector } from 'react-redux'
import CategoryVideoList from "../../Components/CategoryVideoList";
import "./bookmark.scss";

export default function Bookmark() {
  const categories =useSelector(state=>state.CategoriesReducer)
  const videos =useSelector(state=>state.VideosReducer.bookmark)
  console.log(categories)
  return (
    <section className="bookmark">
       {/* <Link to="/">Home</Link> */}
       <h1 className="Home__title">Bookmark</h1>

     {categories[0] && 
     categories.map((el) => {
        return <CategoryVideoList key={el.id} 
        data={el} 
        videos={
          el.VideosID.bookmark.map((item)=>{
            // console.log(videos[0])
            return videos.find((ind)=>ind.id===item)
          })
        }/>
     
     }
     )

     }
    </section>
  );
}
