import React from "react";
import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";

import FormButton from "../../../Components/FormButton";
import Dropdown from "../../../Components/DropDown";

import EpisodeButton from "../../../Components/EpisodeButton";
import arrow_left from "../../../Assets/icons/arrow-left.svg";
import arrow_right from "../../../Assets/icons/arrow-right.svg";



import "../ChangeVideo.scss";

export default function Step2({ changeVideoData, videoData}) {
  const [season, SetSeason]= React.useState(1)
  const [episode, SetEpisode]= React.useState(5)
  const episodes= [ [ 12,  8,  11 ],22]
  const {register, handleSubmit, formState: {errors}} = 
  useForm({mode: 'onBlur'});

const onSelectSeason=(index)=>{
  SetSeason(index)
}
const onSelectEpisode=(index)=>{
  SetEpisode(index)
}
const addEpisode=(index)=>{
  SetEpisode(episode+1)
  console.log(episode)
}

  const addEpisodes=()=>{
    let EpisodeButtons=[]
    for (let i = 0; i < episodes[0][season]; i++) {
      EpisodeButtons.push(<EpisodeButton index={i+1} 
        key={"wew"+i}
        isActive={i<episode? true : false}
         onSelectEpisode={onSelectEpisode}/>)
    }
    EpisodeButtons.push(<EpisodeButton key={"555"} index={episodes[0][season]+1} 
      isAdd
      onSelectEpisode={addEpisode}/>)
    return EpisodeButtons
  }

  const onSubmit=(data)=>{
    changeVideoData({
      currentEpisode: [
        1,
        8
      ],
      AllEpisodes: [
        [
          12,
          8,
          11
        ],
        22
      ]
      }
    )
   // handleIndexForm(1)
    }

  return (
  <form onSubmit={onSubmit} className="changeVideo__form">
      
                   {/* {categories[0] && categories.map((el) => {
                return    <CategoryCard key={el.id}
                 data={el}
                  selectedClass={selectedCategories.includes(el.id)? 
                    'CategoryCard -selected' :  'CategoryCard'}
                  addSelectedCategories={addSelectedCategories}
                  />
            })

            } */}
             <h2 className="changeVideo__label">Select Episode</h2>
             <div className="Step2__wrapper">
             <Dropdown onHandleSelect={onSelectSeason} selectedItem={season}>
{episodes[0].map((el, i)=>{
 return <p key={`Season ${i+1}`}>{`Season ${i+1}`} </p>
})
}
</Dropdown>

   <div className="Step2__episodes-container">
    {addEpisodes() }
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
        <FormButton>Done</FormButton>
</form>

  );
          }
