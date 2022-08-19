import React from "react";
import { AppContext } from "../../App";

import searchIcon from "../../Assets/icons/edit-05.svg";
import "./Search.scss";


export default function Search(){
const {searchVal,SetSearchVal}= React.useContext(AppContext)

    return (
      <form className="Search-bar">
      <input type="text" placeholder="Search.." 
      value={searchVal}
      onChange={(e)=>SetSearchVal(e.target.value)}/>
      <button className="Search-bar__btn">
        <img src={searchIcon} alt="logo" />
      </button>
    </form>
    )
}