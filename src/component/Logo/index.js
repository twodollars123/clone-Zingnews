import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./Logo.module.scss";
import logo from "../../assets/publicImage/logo-zing.jpg";
import React from "react";
const cx = classNames.bind(style);

function Logo() {
  return (
    <div className={cx("wrapper")}>
      <Link to="/">
        <img src={logo} alt="logo" className={cx("logo")} />
      </Link>
    </div>
  );
}

export default Logo;
