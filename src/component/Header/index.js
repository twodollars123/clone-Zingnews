import Logo from "../Logo";
import Nav from "../Nav";
import {
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const cx = classNames.bind(style);

function Header() {
  const [showSearch, setShowSearch] = useState(true);
  const handleShowSearch = (e) => {
    setShowSearch(false);
    console.log(e.target);
  };
  return (
    <div className={cx("wrapper")}>
      <Logo />
      <Nav />
      <div className={cx("action")}>
        {showSearch ? (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={cx("item")}
            onClick={handleShowSearch}
          />
        ) : (
          <input
            type="text"
            className={cx("searchInput")}
            placeholder="Nhập nội dung cần tìm"
          />
        )}
        <FontAwesomeIcon icon={faCircleUser} className={cx("item")} />
      </div>
    </div>
  );
}

export default Header;
