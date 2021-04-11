import React from "react";
import doctor from "../../../../images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const HomeDoctors = () => {
  return (
    <>
      <h5 style={{ color: "#14d1cc", textAlign: "center" }}>OUR DOCTORS</h5>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col-md-4">
            <div className="p-3">
              <img src={doctor} className="img-fluid" alt="" />
              <div
                className="text-center mt-2"
                style={{
                  transform: "translateY(-50px)",
                  backgroundColor: "white",
                }}
              >
                <h5>Dr. Caudi</h5>
                <p>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ color: "#1CC7C1" }}
                  />{" "}
                  +49123456789
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <img src={doctor} className="img-fluid" alt="" />
              <div
                className="text-center mt-2"
                style={{
                  transform: "translateY(-50px)",
                  backgroundColor: "white",
                }}
              >
                <h5>Dr. Caudi</h5>
                <p>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ color: "#1CC7C1" }}
                  />{" "}
                  +49123456789
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <img src={doctor} className="img-fluid" alt="" />
              <div
                className="text-center mt-2"
                style={{
                  transform: "translateY(-50px)",
                  backgroundColor: "white",
                }}
              >
                <h5>Dr. Caudi</h5>
                <p>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ color: "#1CC7C1" }}
                  />{" "}
                  +49123456789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDoctors;
