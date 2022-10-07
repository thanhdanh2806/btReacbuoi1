import React from "react";
import GlassItem from "./GlassesItem";

const GlassesList = ({ glasses, onSelect }) => {
  return (
    <div className="row bg_card">
      {glasses.map((glass) => {
        return (
          <div key={glass.id} className=" col-sm-2 mt-3 mb-3 center">
            <button
              style={{ height: "4rem", width: "15rem" }}
              className="text-center"
              onClick={() => onSelect(glass)}
            >
              <GlassItem glass={glass} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GlassesList;
