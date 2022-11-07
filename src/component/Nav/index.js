import { NavLink } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./Nav.module.scss";
import Popper from "../Popper";
const cx = classNames.bind(style);

function Nav() {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("nav")}>
        <NavLink
          to="/XuatBan"
          className={({ isActive }) =>
            isActive ? cx("focus") : cx("item-nav")
          }
        >
          Xuất bản
        </NavLink>

        <NavLink
          to="/KinhDoanh"
          className={({ isActive }) =>
            isActive ? cx("focus") : cx("item-nav")
          }
        >
          Kinh doanh
        </NavLink>

        <NavLink
          to="/CongNghe"
          className={({ isActive }) =>
            isActive ? cx("focus") : cx("item-nav")
          }
        >
          Công nghệ
        </NavLink>

        <NavLink
          to="/TheThao"
          className={({ isActive }) =>
            isActive ? cx("focus") : cx("item-nav")
          }
        >
          Thể thao
        </NavLink>

        <NavLink
          to="/GiaiTri"
          className={({ isActive }) =>
            isActive ? cx("focus") : cx("item-nav")
          }
        >
          Giải trí
        </NavLink>

        <NavLink
          to="/LifeStyle"
          className={({ isActive }) =>
            isActive ? cx("focus") : cx("item-nav")
          }
        >
          Life style
        </NavLink>

        <li className={cx("item-nav")}>
          <Popper />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
