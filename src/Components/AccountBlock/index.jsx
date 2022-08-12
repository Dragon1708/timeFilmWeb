import React from "react";

import "./AccountBlock.scss";


export default function AccountBlock(){

    return (
  <div className="Account">
     <img className="Account__icon" src={"https://coub-attachments.akamaized.net/coub_storage/channel/cw_avatar/0d8324da288/09f2305c3171c0fec8420/profile_pic_new_1655797651_Screenshot_240.png"} alt="image1" />
  <div className="Account__wrapper">
<h2 className="Account__name">Chanso Viola</h2>
<p className="Account__nick-name">@prisoa</p>
  </div>
  </div>
    )
}