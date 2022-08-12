import React from "react";


import SearchBar from "../Search";
import FeaturedBlock from "../FeaturedBlock/FeaturedBlock";
import TagsContainer from "../TagsContainer/TagsContainer";
import ArticleCard from "../Arcticle/ArticleCard/ArticleCard";
import notification from "../../Assets/icons/clarity_notification.svg";

import "./CenterBar.scss";


export default function CenterBar(){

    return (
      <div className="CenterBlock">
        <div className="CenterBlock__header">
        <SearchBar/>
        <button className="CenterBlock__notification-btn">
        <img src={notification} alt="notification" />
        </button>
        </div>
        <FeaturedBlock/>
        <h2 className="CenterBlock__title">
        Topic best of Day
        </h2>
        <TagsContainer/>
        <ArticleCard/>
        <ArticleCard/>
      </div>
    )
}