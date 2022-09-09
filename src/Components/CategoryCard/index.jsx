import React from "react";


import "./CategoryCard.scss";


export default function CategoryCard({selectedClass, data, addSelectedCategories}){

    return (
      <button type="button"  className={selectedClass} onClick={()=>addSelectedCategories(data.id)}>
 {data.title}
    </button>
    )
}