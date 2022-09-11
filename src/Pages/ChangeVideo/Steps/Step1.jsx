import React from "react";
import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import {FormInput} from "../input";
import FormButton from "../../../Components/FormButton";
import { useSelector, useDispatch } from 'react-redux'


import "../ChangeVideo.scss";

export default function ChangeVideo( {handleIndexForm, changeVideoData}) {
  const [imageURL, SetImageURL]= React.useState('')
 let navigate=useNavigate()
  const {register, handleSubmit, formState: {errors}} = 
  useForm({mode: 'onBlur'});

  const onSubmit=(data)=>{
    changeVideoData({
      timeCode: [
        data.hour===''? 0 : parseInt(data.hour),
        data.min===''? 0 : parseInt(data.min),
        data.sec===''? 0 : parseInt(data.sec)
       ]
    })
   // console.log(data)
 handleIndexForm(1)
  }

  return (
  <form onSubmit={handleSubmit(onSubmit)} className="changeVideo__form">
      
                   {/* {categories[0] && categories.map((el) => {
                return    <CategoryCard key={el.id}
                 data={el}
                  selectedClass={selectedCategories.includes(el.id)? 
                    'CategoryCard -selected' :  'CategoryCard'}
                  addSelectedCategories={addSelectedCategories}
                  />
            })

            } */}
             <h2 className="changeVideo__label">Where did you stay?</h2>
             <div className="changeVideo__time-wrapper">
    <div className="time-wrapper">
      <input className="changeVideo__text-input" 
       {...register('hour')} />
    
    {/* <input className="changeVideo__text-input" 
              placeholder="Image URL" 
              onChange={(e)=>SetEpisodes(e.target.value)}/> */}
        <p className="time-wrapper__sub-title">hour</p>
    </div>

    <div className="time-wrapper">
    <input className="changeVideo__text-input" 
     {...register('min')} />
    {/* <input className="changeVideo__text-input" 
              placeholder="Image URL" 
              onChange={(e)=>SetEpisodes(e.target.value)}/> */}
        <p className="time-wrapper__sub-title">min</p>
    </div>

    <div className="time-wrapper">
    <input className="changeVideo__text-input" 
     {...register('sec')} />
    {/* <input className="changeVideo__text-input" 
              placeholder="Image URL" 
              onChange={(e)=>SetEpisodes(e.target.value)}/> */}
        <p className="time-wrapper__sub-title">sec</p>
    </div>
</div>
<FormButton>Next</FormButton>
 </form>

  );
          }
