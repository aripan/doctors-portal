import React from "react";
import HomeBlogNew from "./HomeBlogNew";

import HomeBlogPublished from "./HomeBlogPublished";

const HomeBlog = () => {
  return (
    <div>
      <div className="text-center">
        <h5 style={{ color: "#14d1cc" }}>OUR BLOG</h5>
        <h2 style={{ color: "#3a4256" }}>From Our Blog News</h2>
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "400px" }}
      >
        <div className="row" style={{ margin: "30px 40px" }}>
          <div
            className="col-md-3"
            style={{ backgroundColor: "#1CC7C1", color: "white" }}
          >
            <HomeBlogNew></HomeBlogNew>
          </div>
          <div className="col-md-9" style={{ padding: "10px 30px" }}>
            <HomeBlogPublished></HomeBlogPublished>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
