// khai báo liên kết jsx

import Features from "./1_Buoi1/Features";

// import logo from "./logo.svg";
// import "./App.css";

// component chỉ là function  return về jsx , mô tả về những gì hiển thị ra giao diện
// component bắt buộc viết hoa chữ cái đầu
function App() {
  // JSX : javascrip + XML- là một cú pháp đặt biệt cho phép viết html trong javascrip
  return (
    <div>
      <Features />
    </div>
  );
}

export default App;
