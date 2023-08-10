import React from "react";
import HomepageWrapper from "./HomePage.styles";
import CustomAvatar from "../../Components/CustomeAvatar/Avatar";
import VisualizerCard from "../../Components/HomePageCards/VisualizerCard";

const Homepage = () => {

  return (
    <HomepageWrapper classname="Home">
      <CustomAvatar />
      <VisualizerCard />

      <div className="area" >
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div >
    </HomepageWrapper>
  );
};

export default Homepage;
