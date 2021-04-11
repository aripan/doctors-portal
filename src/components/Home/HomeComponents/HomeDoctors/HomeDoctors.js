import React from "react";
import doctor from "../../../../images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const HomeDoctors = () => {
  return (
    <div class="container px-4">
      <div class="row gx-5">
        <div class="col-md-4">
          <div class="p-3">
            <img src={doctor} className="img-fluid" alt="" />
            <div className="text-center mt-2">
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
        <div class="col-md-4">
          <div class="p-3">
            <img src={doctor} className="img-fluid" alt="" />
            <div className="text-center mt-2">
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
        <div class="col-md-4">
          <div class="p-3">
            <img src={doctor} className="img-fluid" alt="" />
            <div className="text-center mt-2">
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
  );
};

export default HomeDoctors;
