import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Search from "../Search";
import SectionsButton from "../SectionsButton";
import MainButton from "../MainButton";
import AccountBlock from "../AccountBlock";

import logo from "../../Assets/icons/Logo.svg";
import DB from "../../Assets/DB.json";
import "./SideBar.scss";

export default function SideBar() {

  const categories = useSelector((state) => state.CategoriesReducer);
  const videos = useSelector((state) => state.VideosReducer);
  const dispatch = useDispatch();

  const handleActiveSection = (index) => {
    SetActiveSection(index.name);
  };
 
  const Sections = [
    { title: "Home", DBname: "" },
    { title: "Wathing", DBname: "watch" },
    {
      title: "Bookmark",
      DBname: "bookmark",
    },
    {
      title: "Viewed",
      DBname: "viewed",
    },
  ];
  const [activeSection, SetActiveSection] = React.useState(Sections[0].name);
  return (
    <div className="sideBar">
      <a href="#" className="sideBar__Logo">
        <img src={logo} alt="image1" />
      </a>
      <ul className="sideBar__menu">
        <li>
          <Search />{" "}
        </li>
        {Sections.map((i) => (
          <li onClick={()=>handleActiveSection(i)}>
            <SectionsButton
              selectedClass={
                activeSection === i.name
                  ? "SectionsButton SB-active"
                  : "SectionsButton"
              }
              data={i}
            />
          </li>
        ))}

        <li className="sideBar__label"> MY CATEGORIES </li>
        {categories[0] &&
          categories.map((el) => {
            return (
              <li onClick={() => SetActiveSection(el)}>
                <SectionsButton
                  selectedClass={
                    activeSection === el
                      ? "SectionsButton SB-active"
                      : "SectionsButton"
                  }
                  data={el}
                  id={el.id}
                />
              </li>
            );
          })}

        <li className="sideBar__btn">
          {" "}
          <MainButton />{" "}
        </li>
      </ul>

      <div className="sideBar__account">
        <AccountBlock />
      </div>
    </div>
  );
}
