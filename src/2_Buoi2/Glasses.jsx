import React, { Component } from "react";
import ModalGlass from "./ModalGlass";
import GlassesList from "./GlassesList";

// lấy dữ liệu từ đường dẫn file từ JSON
import data from "./dataGlasses.json";
import "./style.css";
import Cart from "./Cart";

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectGlasses: null,

      // quản lí ẩn hiện modal
      isOpen: false,

      // dữ liệu từ thêm vào giỏ hàng
      AddGlass: [],
    };
  }

  handleSelect = (glasses) => {
    this.setState({ selectGlasses: glasses });
  };

  handleToggleModal = () => {
    // thay đổi giá trị của state isOpen thành giá trị phủ định của chính nó
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  handelAdd = (glass) => {
    // kiểm tra sản phẩm có trong giỏ hay chưa
    const index = this.state.AddGlass.findIndex((item) => item.id === glass.id);

    // -1 là không có cái kính đó trong mảng thì thêm vào giỏ với số lượng kính cũ đã cho vào mảng cùng với cái kính mới chưa có trong giỏ
    if (index === -1) {
      this.setState((state) => ({
        // sao chép lại mảng vào state xong gán lại dữ liệu cho nó , cùng với giá trị đã click thêm vào giỏ
        // quantity là key số lượng
        // nếu nó khôngg có trong giở hàng thì thêm vào giỏ với số lượng là 1
        AddGlass: [...state.AddGlass, { ...glass, quantity: 1 }],
      }));
    } else {
      // gán lại giá trị đã có sẵn trong giỏ vào biến mới
      const newglass = [...this.state.AddGlass];
      // tìm kính mình đã thêm vào giỏ hàng rồi (index) thì tăng số lượng lên
      newglass[index].quantity += 1;
      this.setState({ AddGlass: newglass });
    }
  };

  handlechangequantity = (glassId, quantity) => {
    const index = this.state.AddGlass.findIndex((item) => item.id === glassId);
    const newglass = [...this.state.AddGlass];
    // nếu mà đã có sản sản phẩm trong giỏ mà còn giảm nữa thì xóa
    if (newglass[index].quantity === 1 && quantity === -1) {
      newglass.splice(index, 1);
      this.setState({ AddGlass: newglass });
    } else {
      newglass[index].quantity += quantity;
      this.setState({ AddGlass: newglass });
    }
  };

  render() {
    return (
      <div className="bg_all">
        <header
          style={{ height: "70px", width: "100%", opacity: "0.8" }}
          className="bg-dark text-white text-center d-flex justify-content-between align-items-center"
        >
          {/* giỏ hàng */}
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="text-primary">DANH Shop</h1>
              <h1>TRY GLASSES APP ONLINE</h1>
              <button
                className="btn btn-primary "
                style={{ height: "40px" }}
                onClick={this.handleToggleModal}
              >
                Giỏ hàng
              </button>
            </div>
          </div>
        </header>
        {/* hiện mẫu */}
        <div className="container mt-5">
          <ModalGlass
            glass={this.state.selectGlasses}
            onAddGlass={this.handelAdd}
          />
        </div>
        {/* hiện kính thử */}
        <div className="mt-5" style={{ width: "80%", margin: "auto" }}>
          <GlassesList glasses={data} onSelect={this.handleSelect} />
        </div>
        <Cart
          isOpen={this.state.isOpen}
          onClose={this.handleToggleModal}
          bag={this.state.AddGlass}
          onChangeQuantity={this.handlechangequantity}
        />
      </div>
    );
  }
}
