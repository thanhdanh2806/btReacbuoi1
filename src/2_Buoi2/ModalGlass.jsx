import React from "react";
import WearGlass from "./WearGlass";

const ModalGlass = ({ glass }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGlass;
