import React from "react";
import './App.scss';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { SetVideos, SetBookmark } from './redux/slices/VideosSlice'
import { SetCategories} from './redux/slices/Categories'

import { Routes, Route} from "react-router-dom";

import SideBar from "./Components/SideBar";

import Home from "./Pages/Home";
import Bookmark from "./Pages/Bookmark";
import Login from "./Pages/Bookmark";

export const AppContext=React.createContext()

function App() {
  const [searchVal, SetSearchVal]= React.useState('')
  const dispatch=useDispatch()

 React.useEffect(() => {
  axios.get('https://62fa78e23c4f110faa9a0471.mockapi.io/watch').then(res=>{

// dispatch(SetWatching(res.data[0].watch))
dispatch(SetVideos(res.data[0]))
dispatch(SetCategories(res.data[0].categories))
}
)
  });

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
<Route path="/Login" element={<Login/>}/>
      </Routes>
      </div>
      </AppContext.Provider>
  
    </div>
  );
}

export default App;
