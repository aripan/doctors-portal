import React from "react";

const HomeServiceOption = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="" width="50px" />
      <div className="m-4">
        <h5 style={{ color: "#3a4256" }}>{data.title}</h5>
        <p className="text-secondary">{data.description}</p>
      </div>
    </div>
  );
};

export default HomeServiceOption;
