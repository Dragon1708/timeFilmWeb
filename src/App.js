import React from "react";
import './App.scss';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { SetViewed, SetBookmark, SetWatching } from './redux/slices/VideosSlice'
import { SetCategories} from './redux/slices/Categories'

import { Routes, Route} from "react-router-dom";

import SideBar from "./Components/SideBar";

import Home from "./Pages/Home";
import Bookmark from "./Pages/Bookmark";
import AddVideo from "./Pages/AddVideo";
import ChangeVideo from "./Pages/ChangeVideo";
import Step2 from "./Pages/ChangeVideo/Steps/Step2";

export const AppContext=React.createContext()

function App() {

  const [searchVal, SetSearchVal]= React.useState('')
  const dispatch=useDispatch()
const api='https://62fa78e23c4f110faa9a0471.mockapi.io/'

 React.useEffect(() => {
  axios.get(api+'watch').then(res=>{

// dispatch(SetWatching(res.data[0].watch))
dispatch(SetWatching(res.data))
}
)
axios.get(api+'bookmark').then(res=>{
  dispatch(SetBookmark(res.data))
  }
  )
  axios.get(api+'viewed').then(res=>{
    dispatch(SetViewed(res.data))
    }
    )
axios.get(api+'categories').then(res=>{
  dispatch(SetCategories(res.data))
  }
  )
  }, []);

  return (
    <div className="App">
     
     <AppContext.Provider value={{searchVal,SetSearchVal }}>
      <div className="grid">
      <SideBar />
      <Routes>
<Route path="/" element={
<Home/>
}/>
{/* <Route path="/article/:id" element={

}/> */}
<Route path="/bookmark" element={<Bookmark/>}/>
<Route path="/AddVideo" element={<AddVideo/>}/>
<Route path="/ChangeVideo" element={<ChangeVideo/>}/>
  {/* <Route path="/ChangeVideo/Step2" element={<Step2/>}/> */}
      </Routes>
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
