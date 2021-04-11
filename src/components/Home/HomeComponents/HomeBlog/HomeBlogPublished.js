import React from "react";
import customer1 from "../../../../images/review_customer1.png";
import customer2 from "../../../../images/review_customer2.png";

const HomeBlogPublished = () => {
  return (
    <div className="container px-4">
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="p-3 border shadow rounded">
            <div className="d-flex align-items-center">
              <img src={customer1} alt="" />
              <div className="m-3">
                <h6>Dr. Caudi</h6>
                <small>{new Date().toDateString()}</small>
              </div>
            </div>
            <div className="mt-3">
              <h5>Check at least a doctor in a year for your teeth</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa facere natus nemo, fugiat impedit.
              </small>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border shadow rounded">
            <div className="d-flex align-items-center">
              <img src={customer2} alt="" />
              <div className="m-3">
                <h6>Dr. John Michel</h6>
                <small>{new Date().toDateString()}</small>
              </div>
            </div>
            <div className="mt-3">
              <h5>The tooth cancer is taking a challenge</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores culpa facere natus nemo, fugiat impedit.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogPublished;
