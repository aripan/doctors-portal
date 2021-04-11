import React from "react";
import HomeServiceOption from "./HomeServiceOption";
import fluoride from "../../../../images/fluoride.png";
import cavity from "../../../../images/cavity.png";
import tooth from "../../../../images/tooth.png";
import HomeCareOption from "./HomeCareOption";
import HomeAppointmentOption from "./HomeAppointmentOption";

const HomeServices = () => {
  const homeServiceData = [
    {
      image: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      image: cavity,
      title: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
    {
      image: tooth,
      title: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresculpa facere natus nemo, fugiat impedit.",
    },
  ];
  return (
    <div className="text-center mt-5 home-services-container">
      <h5 style={{ color: "#14d1cc" }}>OUR SERVICES</h5>
      <h2 style={{ color: "#3a4256" }}>Services We Provide</h2>

      <div
        className="row"
        style={{
          margin: "40px 30px",
          padding: "20px",
        }}
      >
        {homeServiceData.map((data, index) => (
          <div className="col-md-4" key={index}>
            <HomeServiceOption data={data}></HomeServiceOption>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "40px 30px",
          padding: "20px",
        }}
      >
        <HomeCareOption></HomeCareOption>
      </div>

      <div
        className="row d-flex align-items-center "
        style={{ height: "450px", margin: "30px 40px" }}
      >
        <HomeAppointmentOption></HomeAppointmentOption>
      </div>
    </div>
  );
};

export default HomeServices;
