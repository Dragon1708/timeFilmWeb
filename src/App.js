
import './App.scss';

import { Routes, Route} from "react-router-dom";

import SideBar from "./Components/SideBar";

import Home from "./Pages/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <div className="grid">
      <SideBar/>
      <Routes>
<Route path="/" element={
<Home/>
}/>
{/* <Route path="/article/:id" element={

}/> */}
<Route path="/Register" element={<Register/>}/>
<Route path="/Login" element={<Login/>}/>
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
