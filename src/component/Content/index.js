import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames/bind";

import style from "./Content.module.scss";
const cx = classNames.bind(style);

function Content() {
  let [hotNewsdt, setHotNewdt] = useState([]);

  async function fetchDataHotNew() {
    let response = await axios(`http://localhost:1337/api/hot-news`);
    let data = await response.data.data;

    setHotNewdt(data);
  }
  let params = useParams();
  console.log("par", params.id);
  //   console.log("hot", typeof hotNewsdt[1].id);
  console.log(
    "data",
    hotNewsdt.filter((item) => item.id === parseInt(params.id))
  );
  let a = params.id
    ? hotNewsdt.filter((item) => item.id === parseInt(params.id))
    : [];
  console.log(hotNewsdt);
  console.log(a);
  useEffect(() => {
    fetchDataHotNew();
  }, []);
  return (
    <div>
      {a &&
        a.length > 0 &&
        a.map((item) => {
          return (
            <div className={cx("wrapper")}>
              <p>{item.attributes.Type}</p>
              <h1 className={cx("title")}>Title: {item.attributes.Title}</h1>
              <p className={cx("content")}>{item.attributes.Content}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Content;
