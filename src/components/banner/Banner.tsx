import React from "react";
import styles from "./Banner.module.css";
import { Carousel as AntdBanner, Image } from "antd";
import banner1 from "../../assets/banner/carousel_1.jpg";
import banner2 from "../../assets/banner/carousel_2.jpg";
import banner3 from "../../assets/banner/carousel_3.jpg";

export const Banner: React.FC = () => {
  return (
    <AntdBanner autoplay className={styles.slider}>
      <Image src={banner1} alt="" />
      <Image src={banner2} alt="" />
      <Image src={banner3} alt="" />
    </AntdBanner>
  );
};
