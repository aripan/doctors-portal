import React from "react";
import chair from "../../../../images/chair.png";
import Header from "../../../shared/Header";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <Header></Header>
      <section className="home-main-container d-flex align-items-center">
        <div className="row gx-4 d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <h1>
              Your New Smile <br /> Start here
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores culpa facere natus nemo, fugiat impedit.{" "}
            </p>
            <button>get appointment</button>
          </div>
          <div className="offset-md-1 col-md-7 ">
            <img src={chair} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;
