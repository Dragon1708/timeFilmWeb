import React from "react";


import FeaturedBlock from "../../Components/FeaturedBlock";
import CategorySection from "../../Components/CategorySection";
import "./Home.scss";

export default function Home() {

  return (

    <section className="Home">
      <h1 className="Home__title">Recent</h1>
     <FeaturedBlock/>
<CategorySection/>
<CategorySection/>
  </section>
  );
}
