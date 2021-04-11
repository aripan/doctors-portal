import React from "react";
import HomeAbout from "../HomeComponents/HomeAbout/HomeAbout";
import HomeHeader from "../HomeComponents/HomeHeader/HomeHeader";
import HomeServices from "../HomeComponents/HomeServices/HomeServices";

const HomeScreen = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
    </div>
  );
};

export default HomeScreen;
