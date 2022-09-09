import React from "react";
import { useDispatch } from 'react-redux'
import { SetCategoryId } from '../../redux/slices/FilterSlice'
import { Link} from "react-router-dom";

import "./SectionsButton.scss";


export default function SectionsButton({selectedClass, data, id}){
const dispatch=useDispatch()

    return (
      <Link to={`/${data.DBname}`}  className={selectedClass} onClick={()=>dispatch(SetCategoryId(id))}>
     {/* { true &&  <img className="SectionsButton__icon" src={"https://st.hzcdn.com/simgs/pictures/haeuser/privat-hause-uwe-muehlhaeusser-photography-img~8651584504ec96c2_4-3581-1-e88d95e.jpg"} alt="image1" />} */}
     <div className="SectionsButton__wrapper">
     <div className="SectionsButton__title">
{data.title}
</div>
<div className="SectionsButton__count">
2
</div>
     </div>

     </Link>
    )
}