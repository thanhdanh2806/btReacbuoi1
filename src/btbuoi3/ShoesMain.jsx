import React, { Component } from "react";
import ListShoes from "./ListShoes";
import data from "./data.json";
import DetailShoes from "./DetailShoes";
import GioHang from "./GioHang";

export default class ShoesMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectShoes: null,
      isOpen: false,
      GioHang: [],
    };
  }
  handleSelect = (shoe) => {
    this.setState({ selectShoes: shoe });
  };

  handleToggle = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  handleGioHang = (shoe) => {
    const index = this.state.GioHang.findIndex((item) => item.id === shoe.id);

    if (index === -1) {
      this.setState((state) => ({
        GioHang: [...state.GioHang, { ...shoe, soluong: 1 }],
      }));
    } else {
      const newShoe = [...this.state.GioHang];
      newShoe[index].soluong += 1;
      this.setState({ GioHang: newShoe });
    }
  };

  handleChangSoLuong = (shoeId, soluong) => {
    const index = this.state.GioHang.findIndex((item) => item.id === shoeId);
    const newshoe = [...this.state.GioHang];

    if (newshoe[index].soluong === 1 && soluong === -1) {
      newshoe.splice(index, 1);
      this.setState({ GioHang: newshoe });
    } else {
      newshoe[index].soluong += soluong;
      this.setState({ GioHang: newshoe });
    }
  };

  render() {
    return (
      <div style={{ minHeight: "100vh" }} className="bg-dark">
        <div className="container">
          <div className="pt-3">
            <div className="d-flex justify-content-between mb-3">
              <h1 className="text-warning ">ShoesShop</h1>
              <button className="btn btn-primary" onClick={this.handleToggle}>
                Giỏ Hàng
              </button>
            </div>
          </div>

          <DetailShoes Shoes={this.state.selectShoes} />
          <ListShoes
            Shoes={data}
            onSelect={this.handleSelect}
            onAddGioHang={this.handleGioHang}
          />
          <GioHang
            isOpen={this.state.isOpen}
            onClose={this.handleToggle}
            GioHang={this.state.GioHang}
            onChangeSoLuong={this.handleChangSoLuong}
          />
        </div>
      </div>
    );
  }
}
