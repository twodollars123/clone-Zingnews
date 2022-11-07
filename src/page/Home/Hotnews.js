import { useState, useEffect } from "react";
//import moment from "moment";
import axios from "axios";

import style from "./Hotnews.module.scss";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
function Hotnews() {
  let [hotNewsdt, setHotNewdt] = useState([]);

  async function fetchDataHotNew() {
    let response = await axios(`http://localhost:1337/api/hot-news`);
    let data = await response.data.data;

    setHotNewdt(data);
  }

  let hotNewdtL =
    hotNewsdt && hotNewsdt.length > 0
      ? hotNewsdt.filter((item) => item.id < 6)
      : [];
  console.log("hotNewdtL", hotNewdtL);
  let hotNewdtC =
    hotNewsdt && hotNewsdt.length > 0
      ? hotNewsdt.filter((item) => item.id === 6)
      : [];
  let hotNewdtR =
    hotNewsdt && hotNewsdt.length > 0
      ? hotNewsdt.filter((item) => item.id > 6)
      : [];

  useEffect(() => {
    fetchDataHotNew();
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("left")}>
        {hotNewdtL &&
          hotNewdtL.length > 0 &&
          hotNewdtL.map((item) => {
            return (
              <Link to={`${item.attributes.Type}/${item.id}`} key={item.id}>
                <div className={cx("item-left")}>
                  <img
                    src={require(`../../assets/publicImage/${item.attributes.imageUrl}`)}
                    alt="photo1"
                  />
                  <h4>{item.attributes.Title}</h4>
                </div>
              </Link>
            );
          })}
      </div>

      {hotNewdtC &&
        hotNewdtC.length > 0 &&
        hotNewdtC.map((item) => {
          return (
            <Link to={`${item.attributes.Type}/${item.id}`} key={item.id}>
              <div className={cx("item-centre")}>
                <img
                  src={require(`../../assets/publicImage/${item.attributes.imageUrl}`)}
                  alt="123"
                ></img>
                <h3>{item.attributes.Title}</h3>
                <p>{item.attributes.Content}</p>
              </div>
            </Link>
          );
        })}

      <div className={cx("right")}>
        {hotNewdtR &&
          hotNewdtR.length > 0 &&
          hotNewdtR.map((item) => {
            return (
              <Link to={`${item.attributes.Type}/${item.id}`} key={item.id}>
                <div className={cx("item-right")}>
                  <img
                    src={require(`../../assets/publicImage/${item.attributes.imageUrl}`)}
                    alt="123"
                  ></img>
                  <h3>{item.attributes.Title}</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Hotnews;
