import React from "react";
import { Row, Col, Image, Divider, Typography } from "antd";
import styles from "./Company.module.css";
import company1 from "../../assets/hot/facebook-807588_640.png";
import company2 from "../../assets/hot/follow-826033_640.png";
import company3 from "../../assets/hot/icon-720944_640.png";
import company4 from "../../assets/hot/microsoft-80658_640.png";

export const Company: React.FC = () => {
  return (
    <div className={styles.content}>
      <Typography.Title level={3} type="danger">
        <Divider orientation="left" className={styles.sdivi}>
          合作企业
        </Divider>
      </Typography.Title>

      <Row>
        <Col span={6}>
          <Image className={styles["iamge-scale"]} src={company1}></Image>
        </Col>
        <Col span={6}>
          <Image className={styles["iamge-scale"]} src={company2}></Image>
        </Col>
        <Col span={6}>
          <Image className={styles["iamge-scale"]} src={company3}></Image>
        </Col>
        <Col span={6}>
          <Image className={styles["iamge-scale"]} src={company4}></Image>
        </Col>
      </Row>
    </div>
  );
};
