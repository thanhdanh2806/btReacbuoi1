import React from "react";

const ShoesItem = ({ shoe }) => {
  return (
    <div className="card mt-5">
      <img className="card-image" src={shoe.image} alt={shoe.name} />
      <div className="card-body">
        <h3 className="card-title">{shoe.name}</h3>
        <p className="card-text">{shoe.price}$</p>
      </div>
    </div>
  );
};

export default ShoesItem;
