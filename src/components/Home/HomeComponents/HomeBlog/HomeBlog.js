import React from "react";
import HomeBlogNew from "./HomeBlogNew";

import HomeBlogPublished from "./HomeBlogPublished";

const HomeBlog = () => {
  return (
    <div style={{ height: "500px" }}>
      <div className="text-center">
        <h5 style={{ color: "#14d1cc" }}>OUR BLOG</h5>
        <h2 style={{ color: "#3a4256" }}>From Our Blog News</h2>
      </div>

      <div className="container px-4 mt-5" style={{ height: "400px" }}>
        <div className="row gx-4">
          <div
            className="col-md-3 shadow rounded"
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
