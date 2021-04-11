import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="d-flex align-items-center" style={{ height: "500px" }}>
        <div class="container px-4">
          <div class="row gx-5">
            <div class="col">
              <div class="p-3">
                <ul className="mt-4" style={{ listStyle: "none" }}>
                  <li>Emergency Dental Care</li>
                  <li>Check Up</li>
                  <li>Treatment of Personal Diseases</li>
                  <li>Tooth Extraction</li>
                  <li>Check Up</li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="p-3 ">
                <ul style={{ listStyle: "none" }}>
                  <h6 style={{ color: "#1CC7C1" }}>Services</h6>
                  <li>Emergency Dental Care</li>
                  <li>Check Up</li>
                  <li>Treatment of Personal Diseases</li>
                  <li>Tooth Extraction</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="p-3 ">
                <ul style={{ listStyle: "none" }}>
                  <h6 style={{ color: "#1CC7C1" }}>Oral Health</h6>
                  <li>Emergency Dental Care</li>
                  <li>Check Up</li>
                  <li>Treatment of Personal Diseases</li>
                  <li>Tooth Extraction</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="p-3 ">
                <h6 style={{ color: "#1CC7C1" }}>Our Address</h6>
                <p>Krefeld, 47805, Germany</p>
                <div
                  className="d-flex justify-content-between"
                  style={{ fontSize: "30px" }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faGooglePlusG} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>

                <div className="mt-5">
                  <p>
                    Call Now
                    <button>+49123456789</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">
        Copyright &copy;{new Date().getFullYear()} All Rights Reserved
      </p>
      <br />
    </>
  );
};

export default Footer;
