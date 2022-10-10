import React from "react";
import ShoesItem from "./ShoesItem";

const ShoesList = ({ Shoes, onAddShoes }) => {
  return (
    <div className="row">
      {Shoes.map((shoe) => {
        return (
          <div key={shoe.id} className="col-sm-4">
            <ShoesItem shoe={shoe} />
            <button
              className="btn btn-success"
              onClick={() => onAddShoes(shoe)}
            >
              Thêm Sản Phẩm
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShoesList;
