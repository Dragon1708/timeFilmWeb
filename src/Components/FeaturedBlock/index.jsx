import React from "react";

import CategoryCard from "../CategoryCard";
import MainButton from "../MainButton";
import check from "../../Assets/icons/check.svg";

import "./FeaturedBlock.scss";

export default function FeaturedBlock({data}){
    const {imgURL, title, currentEpisode, timeCode,AllEpisodes}=data
    return (
        <section className="FeaturedBlock">
          <img className="VideoCard__img" src={imgURL!==''? imgURL:"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-13.png"} alt="image1" />
<div className="FeaturedBlock__right-wrapper">
<h1 className="FeaturedBlock__title">{title}</h1>
<ul className="FeaturedBlock__categories">
    {/* {categoriesID.map(el =>{
return <li><CategoryCard/></li>
    })

    } */}
<li><CategoryCard/></li>
<li><CategoryCard/></li>
</ul>
<div className="FeaturedBlock__time-wrapper">
    <div className="time-wrapper">
        <h2 className="time-wrapper__title"><span>{timeCode[0]}</span></h2>
        <p className="time-wrapper__sub-title">hour</p>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">:</h2>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">{timeCode[1]}</h2>
        <p className="time-wrapper__sub-title">min</p>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">:</h2>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">{timeCode[2]}</h2>
        <p className="time-wrapper__sub-title">sec</p>
    </div>
</div>
<h3 className="FeaturedBlock__episodes">
   {` S${currentEpisode[0]} | E${currentEpisode[1]}`}
</h3>
<div className="FeaturedBlock__toggle">
<MainButton/>
<button className="FeaturedBlock__accept-btn">
<img src={check} alt="image1" />
</button>
</div>
</div>
      </section>
    )
}