import React from "react";

const DetailShoes = ({ Shoes }) => {
  if (!Shoes) {
    return null;
  }
  return (
    <div className="row mt-5 bg-light rounded mb-5">
      <div className="col-sm-4 mt-5 mb-5 ">
        <h3 className="text-center">{Shoes.name}</h3>
        <img
          src={Shoes.image}
          alt={Shoes.name}
          width="50%"
          height="200rem"
          style={{ marginLeft: "20%" }}
        />
      </div>
      <div className="col-sm-8 mt-5 ml-5">
        <h3>Chi Tiết</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Tên</td>
              <td>{Shoes.name}</td>
            </tr>
            <tr>
              <td>Giá</td>
              <td>{Shoes.price}$</td>
            </tr>
            <tr>
              <td>Số Lượng Còn </td>
              <td>{Shoes.quantity} Đôi</td>
            </tr>
            <tr>
              <td>Mô Tả</td>
              <td>{Shoes.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailShoes;
