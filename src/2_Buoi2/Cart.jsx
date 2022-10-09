import React from "react";

function Cart({ isOpen, onClose, bag, onChangeQuantity }) {
  //nếu isOpen là false => ẩn modal
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* giỏ hàng */}
      {/* Modal */}
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
                Giỏ hàng
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
                  {bag.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={item.url}
                          alt={item.name}
                          width="100px"
                          height="50px"
                        />
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => onChangeQuantity(item.id, -1)}
                          //   disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn btn-success"
                          onClick={() => onChangeQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>{item.quantity * item.price}</td>
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

export default Cart;
