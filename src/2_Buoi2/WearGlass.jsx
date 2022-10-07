import React from "react";

const WearGlass = ({ glass }) => {
  if (!glass) {
    return null;
  }

  return (
    <div>
      <img
        style={{ height: "5rem", width: "15rem", opacity: "0.8" }}
        src={glass.url}
        alt={glass.name}
      />
    </div>
  );
};

export default WearGlass;
