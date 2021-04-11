import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeBlogNew = () => {
  return (
    <div className="text-start" style={{ margin: "20px" }}>
      <h6>Rashed Kabir</h6>
      <small>{new Date().toDateString()}</small>

      <h5 className="mt-3">
        Check at least a doctor in a <br /> year for your teeth
      </h5>
      <br />
      <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "30px" }} />
    </div>
  );
};

export default HomeBlogNew;
