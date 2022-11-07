import Header from "../../component/Header";

import classNames from "classnames/bind";
import style from "./OtherLayout.module.scss";

const cx = classNames.bind(style);

function OtherLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{children} </div>
    </div>
  );
}

export default OtherLayout;
