import React from "react";

const GlassesItem = ({ glass }) => {
  return (
    <img
      style={{ width: "100%", height: "50px" }}
      src={glass.url}
      alt={glass.name}
    />
  );
};

export default GlassesItem;
