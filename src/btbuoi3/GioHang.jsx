import React from "react";

function GioHang({ isOpen, onClose, GioHang, onChangeSoLuong }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div
        className="modal fade show d-block"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ Hàng
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {GioHang.map((shoe, index) => (
                    <tr key={shoe.id}>
                      <td>{index + 1}</td>
                      <td>{shoe.name}</td>
                      <td>
                        <img
                          src={shoe.image}
                          alt={shoe.name}
                          height="50px"
                          width="50px"
                        />
                      </td>
                      <td>{shoe.price}$</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => onChangeSoLuong(shoe.id, -1)}
                        >
                          -
                        </button>
                        <span className="mx-1">{shoe.soluong}</span>
                        <button
                          className="btn btn-success"
                          onClick={() => onChangeSoLuong(shoe.id, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>{shoe.soluong * shoe.price}$</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
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

      {/* overplay */}
      <div className="modal-backdrop fade show"></div>
    </div>
  );
}

export default GioHang;
