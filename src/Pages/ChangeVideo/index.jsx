import React from "react";
import { useNavigate  } from "react-router-dom";
import { SetCurrentVideo} from '../../redux/slices/VideosSlice'
import { useSelector, useDispatch } from 'react-redux'

import FormButton from "../../Components/FormButton";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";


import close from "../../Assets/icons/x-close.svg";

import "./ChangeVideo.scss";

export const AppContext=React.createContext()

export default function ChangeVideo() {
  const currentVideo = useSelector((state) => state.VideosReducer.currentVideo);
  const [indexForm, SetIndexForm]= React.useState(0)
  const [tempData, SetTempData]= React.useState({})

const dispatch=useDispatch()

const changeVideoData = (NewData) => {
  SetTempData({
    ...tempData,
    ...NewData})
}

const changeVideoDone = (NewData) => {
  SetTempData({
    ...tempData,
    ...NewData})
}
console.log(tempData)
const handleIndexForm=(index)=>{
  SetIndexForm(index)
}

const renderSwitch=(indexForm)=> {
  switch(indexForm) {
    case 0:
      return ( <Step1 handleIndexForm={handleIndexForm} changeVideoData={changeVideoData}/>);
      case 1:
        return ( <Step2  videoData={currentVideo} changeVideoData={changeVideoDone}/>);
    default:
      return 'foo';
  }
}

  return (
    <section className="changeVideo">
  <img className="changeVideo__poster" src={currentVideo.imgURL} alt="Poster" />
  <button className="changeVideo__close-btn">
  <img src={close} alt="close" />
  </button>
  <div className="changeVideo__left-side">
  <h1 className="changeVideo__title">{currentVideo.title}</h1>
  { renderSwitch(indexForm) }

  </div>

         

    </section>
  );
          }
