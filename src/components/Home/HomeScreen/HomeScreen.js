import React from "react";
import HomeAbout from "../HomeComponents/HomeAbout/HomeAbout";
import HomeHeader from "../HomeComponents/HomeHeader/HomeHeader";
import HomeServices from "../HomeComponents/HomeServices/HomeServices";
import HomeBlog from "../HomeComponents/HomeBlog/HomeBlog";

const HomeScreen = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default HomeScreen;
