import React from "react";

const ListShoes = ({ Shoes, onSelect, onAddGioHang }) => {
  return (
    <div className="row">
      {Shoes.map((shoe) => (
        <div key={shoe.id} className="col-sm-2">
          <div className="card mb-5" style={{ height: "27rem" }}>
            <img className="card-image" src={shoe.image} alt={shoe.name} />
            <div className="card-body">
              <h3 className="card-title">{shoe.name}</h3>
              <p className="card-text">{shoe.price}$</p>
              <div className="row"></div>
              <button
                className="btn btn-success col-sm-5 "
                style={{ marginRight: "10px" }}
                onClick={() => onSelect(shoe)}
              >
                Chi Tiết
              </button>
              <button
                className="btn btn-primary col-sm-6"
                onClick={() => onAddGioHang(shoe)}
              >
                Thêm Vào Giỏ
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListShoes;
