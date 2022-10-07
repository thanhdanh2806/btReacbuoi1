// khai báo liên kết jsx
import Glasses from "./2_Buoi2/Glasses";

// import logo from "./logo.svg";
// import "./App.css";

// component chỉ là function  return về jsx , mô tả về những gì hiển thị ra giao diện
// component bắt buộc viết hoa chữ cái đầu
function App() {
  // JSX : javascrip + XML- là một cú pháp đặt biệt cho phép viết html trong javascrip
  return (
    <div>
      <Glasses />
    </div>
  );
}

export default App;
