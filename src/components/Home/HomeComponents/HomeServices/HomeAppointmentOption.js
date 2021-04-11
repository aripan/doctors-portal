import React from "react";
import doctor from "../../../../images/doctor.png";

const HomeAppointmentOption = () => {
  return (
    <div
      className="d-flex just-content-center align-items-center"
      style={{
        backgroundColor: "#3A4256",

        height: "330px",
      }}
    >
      <div className="col-md-5">
        <img
          src={doctor}
          className="img-fluid"
          alt=""
          style={{ transform: "translateY(-50px)" }}
        />
      </div>
      <div className="col-md-7 text-start">
        <h6 style={{ color: "#1CC7C1" }}>APPOINTMENT</h6>
        <h2 className="text-white">Make an appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default HomeAppointmentOption;
