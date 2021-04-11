import React from "react";
import "./HomeAbout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const HomeAbout = () => {
  const homeAboutData = [
    {
      title: "Opening Hours",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: faClock,
      background: "color1",
    },
    {
      title: "Visit Our Location",
      description: "Krefeld, 47805, Germany",
      icon: faMapMarkerAlt,
      background: "color2",
    },
    {
      title: "Contact Us Now",
      description: "+49123456789",
      icon: faPhoneAlt,
      background: "color1",
    },
  ];

  return (
    <div className="home-about-div d-flex justify-content-center align-items-center">
      {homeAboutData.map((data, index) => (
        <div
          className={`home-about-container d-flex justify-content-center align-items-center ${data.background}`}
          key={index}
        >
          <div className="p-2">
            <FontAwesomeIcon icon={data.icon} style={{ fontSize: "50px" }} />
          </div>
          <div className="p-2">
            <h5>{data.title}</h5>
            <small>{data.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeAbout;
