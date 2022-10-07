import React, { Component } from "react";
import ModalGlass from "./ModalGlass";
import GlassesList from "./GlassesList";

// lấy dữ liệu từ đường dẫn file từ JSON
import data from "./dataGlasses.json";
import "./style.css";
import WearGlass from "./WearGlass";

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectGlasses: null,
    };
  }

  handleSelect = (glasses) => {
    this.setState({ selectGlasses: glasses });
  };

  render() {
    return (
      <div className="bg_all">
        <header
          style={{ height: "50px", width: "100%" }}
          className="bg-dark text-white text-center"
        >
          <h1>TRY GLASSES APP ONLINE</h1>
        </header>
        <div className="container">
          {/* truyền dữ liệu lấy từ file JSON vừa lấy truyền vào GlassList */}
          <ModalGlass />
        </div>
        <div className="mt-5" style={{ width: "90%", margin: "auto" }}>
          <GlassesList glasses={data} onSelect={this.handleSelect} />
        </div>
        <WearGlass glass={this.state.selectGlasses} />
      </div>
    );
  }
}
