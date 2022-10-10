import React, { Component } from "react";
import ShoesList from "./ShoesList";
import data from "./data.json";
import GioHang from "./GioHang";

export default class Shoes extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      AddShoes: [],
      // tắt mở Bag
      // gán giá trị mặc định
      isOpen: false,
    };
  }

  handleToggle = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  handleAddShoes = (shoe) => {
    const index = this.state.AddShoes.findIndex((item) => item.id === shoe.id);
    if (index === -1) {
      this.setState((state) => ({
        AddShoes: [...state.AddShoes, { ...shoe, soluong: 1 }],
      }));
    } else {
      const newShoes = [...this.state.AddShoes];
      newShoes[index].soluong += 1;
      this.setState({ AddShoes: newShoes });
    }
  };

  handleChangeSoluong = (shoeId, so) => {
    const index = this.state.AddShoes.findIndex((item) => item.id === shoeId);
    const newShoes = [this.state.AddShoes];
    newShoes[index].soluong += so;
    this.setState({ AddShoes: newShoes });
  };

  render() {
    return (
      <div style={{ minHeight: "100vh" }} className="bg-dark">
        <div className="container">
          <h1 className="text-warning text-center mb-5">Shoes</h1>
          <button className="btn btn-success" onClick={this.handleToggle}>
            Giỏ Hàng
          </button>
          <ShoesList Shoes={data} onAddShoes={this.handleAddShoes} />
          <GioHang
            isOpen={this.state.isOpen}
            onClose={this.handleToggle}
            AddShoes={this.state.AddShoes}
            onChangeSoluong={this.handleChangeSoluong}
          />
        </div>
      </div>
    );
  }
}
