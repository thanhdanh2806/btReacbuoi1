import React from "react";

const WearGlass = ({ glass }) => {
  if (!glass) {
    return null;
  }

  return (
    <div>
      <img className="wear" src={glass.url} alt={glass.name} />
    </div>
  );
};

export default WearGlass;
