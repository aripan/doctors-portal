import React from "react";
import care from "../../../../images/care.png";

const HomeCareOption = () => {
  return (
    <div
      className="d-flex just-content-center align-items-center text-start"
      style={{
        margin: "40px 30px",
      }}
    >
      <div className="col-md-6">
        <img
          src={care}
          className="img-fluid"
          alt=""
          style={{ height: "500px" }}
        />
      </div>
      <div className="col-md-6">
        <h2>
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default HomeCareOption;
