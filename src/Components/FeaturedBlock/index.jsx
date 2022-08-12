import React from "react";

import CategoryCard from "../CategoryCard";
import MainButton from "../MainButton";
import check from "../../Assets/icons/check.svg";

import "./FeaturedBlock.scss";

export default function FeaturedBlock(){
 
    return (
        <section className="FeaturedBlock">
            <img className="FeaturedBlock__img" src={"https://img1.ak.crunchyroll.com/i/spire1/58233f610abc458778ac5726573c8e0a1645014684_main.jpg"} alt="image1" />
<div className="FeaturedBlock__right-wrapper">
<h1 className="FeaturedBlock__title">Article of Day</h1>
<ul className="FeaturedBlock__categories">
<li><CategoryCard/></li>
<li><CategoryCard/></li>
</ul>
<div className="FeaturedBlock__time-wrapper">
    <div className="time-wrapper">
        <h2 className="time-wrapper__title"><span>1</span>1</h2>
        <p className="time-wrapper__sub-title">hour</p>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">:</h2>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">21</h2>
        <p className="time-wrapper__sub-title">min</p>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">:</h2>
    </div>
    <div className="time-wrapper">
        <h2 className="time-wrapper__title">10</h2>
        <p className="time-wrapper__sub-title">sec</p>
    </div>
</div>
<h3 className="FeaturedBlock__episodes">
    S1 | E12
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