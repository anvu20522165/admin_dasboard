import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TheatersIcon from "@mui/icons-material/Theaters";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const logout = () => {
    // code to logout the user and clear user data from state
    fetch("https://uitcinema.devhungops.website/api/auth/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.location.replace("/login");
      })
      .catch((err) => {
        window.location.replace("/login");
      });
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Quản lý điện ảnh</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Trang Chủ</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">Danh Sách</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người Dùng</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Phim</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthIcon className="icon" />
              <span>Tạo Lịch Chiếu</span>
            </li>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Đặt Vé</span>
            </li>
          </Link>
          <Link to="/cinemas" style={{ textDecoration: "none" }}>
            <li>
              <TheatersIcon className="icon" />
              <span>Rạp Phim</span>
            </li>
          </Link>

          <p className="title">Phân Tích</p>
       
          <Link to="/feedbacks" style={{ textDecoration: "none" }}>
            <li>
              <FeedbackIcon className="icon" />
              <span>Feedback</span>
            </li>
          </Link>

          <p className="title">Lựa Chọn</p>

          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={logout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
