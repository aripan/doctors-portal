import React from "react";
import customer1 from "../../../../images/review_customer1.png";
import customer2 from "../../../../images/review_customer2.png";
import customer3 from "../../../../images/review_customer3.png";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeTestimonial = () => {
  return (
    <div style={{ height: "500px" }}>
      <div className="container px-4 mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <h5 style={{ color: "#14d1cc" }}>TESTIMONIAL</h5>
            <h2 style={{ color: "#3a4256" }}>
              What's Our Patients <br /> Says
            </h2>
          </div>

          <FontAwesomeIcon
            icon={faQuoteLeft}
            style={{ fontSize: "100px", opacity: "0.3", color: "#14d1cc" }}
          />
        </div>
        <div className="row gx-5 mt-3">
          <div className="col-md-4">
            <div className="p-3 border shadow rounded">
              <p style={{ color: "#3a4256" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa facere natus nemo, fugiat impedit.
              </p>
              <div className="d-flex align-items-center">
                <img src={customer1} alt="" />
                <div className="m-3">
                  <h6 style={{ color: "#1CC7C1" }}>Winson Herry</h6>
                  <small className="text-secondary">
                    {new Date().toDateString()}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border shadow rounded">
              <p style={{ color: "#3a4256" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa facere natus nemo, fugiat impedit.
              </p>
              <div className="d-flex  align-items-center">
                <img src={customer2} alt="" />
                <div className="m-3">
                  <h6 style={{ color: "#1CC7C1" }}>Winson Herry</h6>
                  <small className="text-secondary">
                    {new Date().toDateString()}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border shadow rounded">
              <p style={{ color: "#3a4256" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa facere natus nemo, fugiat impedit.
              </p>
              <div className="d-flex  align-items-center">
                <img src={customer3} alt="" />
                <div className="m-3">
                  <h6 style={{ color: "#1CC7C1" }}>Winson Herry</h6>
                  <small className="text-secondary">
                    {new Date().toDateString()}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
