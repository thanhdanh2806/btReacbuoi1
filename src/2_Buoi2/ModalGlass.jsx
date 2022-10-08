import React from "react";
import WearGlass from "./WearGlass";

const ModalGlass = ({ glass, onAddGlass }) => {
  if (!glass) {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="center">
            <div className="modal-name"></div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="center">
            <div className="modal-name">
              <div className="local-glass center"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="center">
          <div className="modal-name"></div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="center">
          <div className="modal-name">
            <div className="local-glass center">
              <WearGlass glass={glass} />
            </div>
            <div
              className="bg-warning"
              style={{
                height: "7.9rem",
                width: "100%",
                opacity: "0.8",
                marginTop: "7rem",
                paddingLeft: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              <h4 className="text-primary">{glass.name}</h4>
              <p className="text-light">{glass.desc}</p>
            </div>
            <button
              className="btn btn-success"
              style={{ opacity: "1" }}
              onClick={() => onAddGlass(glass)}
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGlass;
