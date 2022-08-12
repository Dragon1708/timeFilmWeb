import React from "react";


import "./UserWidget.scss";


export default function UserWidget(){

    return (
      <div className="UserWidget">
      <img className="UserWidget__icon" src={"https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cute-girl-avatar-material-png-image_678035.jpg"} alt="image1" />
      <div>
      <h2 className="UserWidget__name">
Adrian Bahov
      </h2>
      <p className="UserWidget__status"> member</p>
      </div>
      </div>
    )
}