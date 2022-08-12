import React from "react";


import searchIcon from "../../Assets/icons/edit-05.svg";
import "./Search.scss";


export default function Search(){

    return (
      <form className="Search-bar">
      <input type="text" placeholder="Search.." />
      <button className="Search-bar__btn">
        <img src={searchIcon} alt="logo" />
      </button>
    </form>
    )
}