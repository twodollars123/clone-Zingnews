import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import classNames from "classnames/bind";
import style from "./Popper.module.scss";
const cx = classNames.bind(style);

function Popper() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [showPopper, setShowPopper] = useState(false);

  const handleShowNavBar = () => {
    setShowNavBar(false);
    setShowPopper(true);
  };
  const handleHideNavBar = () => {
    setShowNavBar(true);
    setShowPopper(false);
  };
  return (
    <div className={cx("wrapper")}>
      {showNavBar ? (
        <FontAwesomeIcon
          icon={faEllipsis}
          onClick={handleShowNavBar}
          className={cx("icon")}
        />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleHideNavBar}
          className={cx("icon")}
        />
      )}
      {showPopper && (
        <div className={cx("popper")}>
          <div className={cx("item")}>
            <ul>
              <h3>Xuất bản</h3>
              <li>Tin tức xuất bản</li>
              <li>Sách hay</li>
              <li>Nghiên cứu xuất bản</li>
              <li>Tác giả</li>
            </ul>
          </div>
          <div className={cx("item")}>
            <ul>
              <h3>Xuất bản</h3>
              <li>Tin tức xuất bản</li>
              <li>Sách hay</li>
              <li>Nghiên cứu xuất bản</li>
              <li>Tác giả</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popper;
