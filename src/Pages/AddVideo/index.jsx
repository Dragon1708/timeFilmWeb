import React from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { AddWatching} from '../../redux/slices/VideosSlice'
import { useSelector, useDispatch } from 'react-redux'


import CategoryCard from "../../Components/CategoryCard";

import arrow_left from "../../Assets/icons/arrow-left.svg";
import arrow_right from "../../Assets/icons/arrow-right.svg";
import close from "../../Assets/icons/x-close.svg";

import "./AddVideo.scss";

export default function AddVideo() {
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
const onSubmit=()=>{

if ( title ) {
  const NewVideo={
    imgURL: imageURL ? imageURL: '',
    title: title,
    currentEpisode: [ 1, 1 ],
    timeCode: [ 0, 0, 0 ],
    categoriesID:selectedCategories[0]? 
    ['00', selectedCategories]: ['00'],
    AllEpisodes: [ [  episodes? parseInt(episodes) : 1 ],
      episodes? parseInt(episodes) : 1 ],
    updatedTime: Date.now()
  }
  axios.post('https://62fa78e23c4f110faa9a0471.mockapi.io/watch', NewVideo)
  .then(function (response) {
    dispatch(AddWatching(NewVideo))
    navigate('/')
  })
  .catch(function (error) {
    console.log(error);
  });
  

}
}

const handleSelections = (index) => {
  SetSelection(index)
}


  return (
    <section className="AddVideo">
      {/* <div className="AddVideo__wrapper"> */}
      <form className="AddVideo__form" >
        <button type="button" className="AddVideo__close-btn">
          <img  src={close} alt="close" />
        </button>
        <div className="AddVideo__wrapper">
        { imageURL?  <img className="AddVideo__poster" 
        src={imageURL} 
        alt="image1"
        // onError={onErrorIMG}
        /> :
          <div className="AddVideo__poster"></div>}
          {/* <form className="post-edit" ref="commentForm" onSubmit={this.processComment}> */}
          <div className="AddVideo__right">
            <label className="AddVideo__label">Image URL</label>
            <input className="AddVideo__text-input" 
            placeholder="Image URL"
            onChange={(e)=>changeImageURL(e.target.value)}
            />

            <label className="AddVideo__label">Name</label>
            <input className="AddVideo__text-input" 
            placeholder="Image URL"
            onChange={(e)=>SetTitle(e.target.value)}
            />

            <div className="AddVideo__right-flex">
              <label className="AddVideo__label">Number of episodes:</label>
              <input className="AddVideo__text-input" 
              placeholder="Image URL" 
              onChange={(e)=>SetEpisodes(e.target.value)}/>
            </div>

            <div className="AddVideo__right-flex">
            <button type="button" onClick={()=>handleSelections(0)}>
           Watch
          </button>
          <button type="button" onClick={()=>handleSelections(1)}>
         bookmark
          </button>
          <button type="button" onClick={()=>handleSelections(2)}>
       viewed
          </button>
            </div>

          </div>
        </div>

        <div className="AddVideo__categories">
          <h2 className="AddVideo__title">Select Categoty</h2>
          <div className="AddVideo__categories-grid">
            {categories[0] && categories.map((el) => {
                return    <CategoryCard key={el.id}
                 data={el}
                  selectedClass={selectedCategories.includes(el.id)? 
                    'CategoryCard -selected' :  'CategoryCard'}
                  addSelectedCategories={addSelectedCategories}
                  />
            })

            }
      
          </div>
        </div>
        <div className="AddVideo__paggination">
          <button type="button">
            <img src={arrow_left} alt="image1" />
          </button>
          <button type="button">
            <img src={arrow_right} alt="image1" />
          </button>
        </div>
        <a onClick={onSubmit}  className="AddVideo__submit-btn">
          Done
        </a>
      </form>
      {/* </div> */}
    </section>
  );
          }
