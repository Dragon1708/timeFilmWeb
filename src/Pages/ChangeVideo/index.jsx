import React from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { AddWatching} from '../../redux/slices/VideosSlice'
import { useSelector, useDispatch } from 'react-redux'


import CategoryCard from "../../Components/CategoryCard";

import arrow_left from "../../Assets/icons/arrow-left.svg";
import arrow_right from "../../Assets/icons/arrow-right.svg";
import close from "../../Assets/icons/x-close.svg";

import "./ChangeVideo.scss";

export default function ChangeVideo() {
  const [imageURL, SetImageURL]= React.useState('')
  const [title, SetTitle]= React.useState('')
  const [episodes, SetEpisodes]= React.useState('')
  const [selectedCategories, SetselectedCategories]= React.useState([])
  const [selection, SetSelection]= React.useState(0)
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const categories =useSelector(state=>state.CategoriesReducer)

  function checkURL2(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function checkURL(url) {
  const img = new Image();
  img.src = url;
  img.onload = ()=>{
    SetImageURL(url)
  }; 
  img.onerror = ()=>{
    SetImageURL('')
  }; ;
}

function onErrorIMG(url) {
  SetImageURL('')
}
const addSelectedCategories=(ID)=>{
// const temp=selectedCategories.push(ID)
if (selectedCategories.includes(ID)) {
 const arr = selectedCategories.filter(function(item) {
    return item !== ID
})
SetselectedCategories(arr)
}else{
  SetselectedCategories([...selectedCategories, ID])
}

}

const changeImageURL=(val)=>{
  if (checkURL2(val)) {
    SetImageURL(val)
  }
  else{
    SetImageURL('')
  }
 // SetImageURL(val)

}


const handleSelections = (index) => {
  SetSelection(index)
}


  return (
    <section className="changeVideo">
  <img  src={"https://i.stack.imgur.com/wiKnx.png"} alt="Poster" />
  <img  src={close} alt="close" />
  <div className="changeVideo__right-flex">
             <h1 className="changeVideo__title">Spy X</h1>
                   {/* {categories[0] && categories.map((el) => {
                return    <CategoryCard key={el.id}
                 data={el}
                  selectedClass={selectedCategories.includes(el.id)? 
                    'CategoryCard -selected' :  'CategoryCard'}
                  addSelectedCategories={addSelectedCategories}
                  />
            })

            } */}
             <label className="AddVideo__label">Where did you stay?</label>
             <div className="FeaturedBlock__time-wrapper">
    <div className="time-wrapper">
    <input className="AddVideo__text-input" 
              placeholder="Image URL" 
              onChange={(e)=>SetEpisodes(e.target.value)}/>
        <p className="time-wrapper__sub-title">hour</p>
    </div>

    <div className="time-wrapper">
    <input className="AddVideo__text-input" 
              placeholder="Image URL" 
              onChange={(e)=>SetEpisodes(e.target.value)}/>
        <p className="time-wrapper__sub-title">min</p>
    </div>

    <div className="time-wrapper">
    <input className="AddVideo__text-input" 
              placeholder="Image URL" 
              onChange={(e)=>SetEpisodes(e.target.value)}/>
        <p className="time-wrapper__sub-title">sec</p>
    </div>
</div>
            
            </div>
            <a onClick={()=>{}}  className="AddVideo__submit-btn">
          Done
        </a>

    </section>
  );
          }
