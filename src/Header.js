import React, { Component } from "react";
import Logo from "./robinhood.svg";
import "./Header.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

export class Header extends Component {
  render() {
    return (
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={Logo} width={25} alt="" />
        </div>
        <div className="header__search">
          <div className="header__searchContainer">
            <SearchOutlined />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header__menuItems">
          <a href="/">Free Stocks</a>
          <a href="/">PortFolio</a>
          <a href="/">Cash</a>
          <a href="/">Messages</a>
          <a href="/">Account</a>
        </div>
      </div>
    );
  }
}

export default Header;
