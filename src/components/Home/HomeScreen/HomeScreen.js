import React from "react";
import HomeAbout from "../HomeComponents/HomeAbout/HomeAbout";
import HomeHeader from "../HomeComponents/HomeHeader/HomeHeader";
import HomeServices from "../HomeComponents/HomeServices/HomeServices";
import HomeBlog from "../HomeComponents/HomeBlog/HomeBlog";
import HomeTestimonial from "../HomeComponents/HomeTestimonial/HomeTestimonial";
import HomeDoctors from "../HomeComponents/HomeDoctors/HomeDoctors";
import HomeContact from "../HomeComponents/HomeContact/HomeContact";
import Footer from "../../shared/Footer";

const HomeScreen = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <HomeTestimonial></HomeTestimonial>
      <HomeBlog></HomeBlog>
      <HomeDoctors></HomeDoctors>
      <HomeContact></HomeContact>
      <Footer></Footer>
    </div>
  );
};

export default HomeScreen;
