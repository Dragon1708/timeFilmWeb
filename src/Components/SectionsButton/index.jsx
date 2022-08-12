import React from "react";


import "./SectionsButton.scss";


export default function SectionsButton(){

    return (
      <a href="#" className="SectionsButton">
     { true &&  <img className="SectionsButton__icon" src={"https://st.hzcdn.com/simgs/pictures/haeuser/privat-hause-uwe-muehlhaeusser-photography-img~8651584504ec96c2_4-3581-1-e88d95e.jpg"} alt="image1" />}
     <div className="SectionsButton__wrapper">
     <div className="SectionsButton__title">
Home
</div>
<div className="SectionsButton__count">
2
</div>
     </div>

      </a>
    )
}