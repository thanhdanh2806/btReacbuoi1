import React from "react";

function GioHang({ isOpen, onClose, AddShoes, onChangeSoluong }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ Hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Đơn Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {AddShoes.map((shoe, index) => (
                    <tr key={shoe.id}>
                      <td>{index + 1}</td>
                      <td>{shoe.name}</td>
                      <td>
                        <img
                          src={shoe.image}
                          alt={shoe.name}
                          width="100px"
                          height="80px"
                        />
                      </td>
                      <td>{shoe.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => onChangeSoluong(shoe.id, -1)}
                        >
                          -
                        </button>
                        <span>{shoe.soluong}</span>
                        <button
                          className="btn btn-success"
                          onClick={() => onChangeSoluong(shoe.id, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>{shoe.soluong * shoe.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success">Đặt hàng</button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default GioHang;
