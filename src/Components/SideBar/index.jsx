import React from "react";

import Search from '../Search';
import SectionsButton from '../SectionsButton';
import MainButton from '../MainButton';
import AccountBlock from '../AccountBlock';

import logo from '../../Assets/icons/Logo.svg';
import "./SideBar.scss";


export default function SideBar(){


    return (
        <div className="sideBar">

      <a href="#" className="sideBar__Logo" >
      <img  src={logo} alt="image1" />
         </a>
        <ul className="sideBar__menu">
        <li><Search/> </li>
        <li> <SectionsButton/> </li>
        <li> <SectionsButton/> </li>
        <li> <SectionsButton/> </li>
        <li className="sideBar__label"> MY CATEGORIES </li>
        <li> <SectionsButton/> </li>
        <li> <SectionsButton/> </li>
        <li> <SectionsButton/> </li>

        <li className="sideBar__btn"> <MainButton/> </li>
        
        </ul>

        <div className="sideBar__account">
    <AccountBlock/>
        </div>
          </div>
    )
}