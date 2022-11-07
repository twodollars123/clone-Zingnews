import Home from "../page/Home";
import CongNghe from "../page/CongNghe";
import GiaiTri from "../page/GiaiTri";
import KinhDoanh from "../page/KinhDoanh";
import TheThao from "../page/TheThao";
import XuatBan from "../page/XuatBan";
import LifeStyle from "../page/LifeStyle";
import OtherLayout from "../LayOut/OtherLayout";

const publicRoute = [
  { path: "/", component: Home },
  { path: "/CongNghe", component: CongNghe, layout: OtherLayout },
  { path: "/GiaiTri", component: GiaiTri, layout: OtherLayout },
  { path: "/KinhDoanh", component: KinhDoanh, layout: OtherLayout },
  { path: "/TheThao", component: TheThao, layout: OtherLayout },
  { path: "/XuatBan", component: XuatBan, layout: OtherLayout },
  { path: "/LifeStyle", component: LifeStyle, layout: OtherLayout },
];

const privateRoute = [];

export { publicRoute, privateRoute };
