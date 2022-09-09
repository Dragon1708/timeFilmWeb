import React from "react";
import { Link} from "react-router-dom";

import "./MainButton.scss";


export default function MainButton(){

    return (
    
           <Link className="MainButton" to="/AddVideo"> Add Your Video</Link>
 
    
    )
}