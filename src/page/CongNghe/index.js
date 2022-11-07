import Content from "../../component/Content";
import classNames from "classnames/bind";
import style from "../CongNghe/CongNghe.module.scss";
import MainContent from "../../component/MainContent";

const cx = classNames.bind(style);

function CongNghe() {
  return (
    <div className={cx("wrapper")}>
      <Content />
      <MainContent />
    </div>
  );
}

export default CongNghe;
