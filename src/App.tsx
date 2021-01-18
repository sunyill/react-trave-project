import React from "react";
import styles from "./App.module.css";
import {
  Header,
  Footer,
  Banner,
  SlideItem,
  HotTourist,
  Company
} from "./components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mock/hotContent";
import image1 from "./assets/hot/sider_2019_02-04-2.png";
import image2 from "./assets/hot/sider_2019_02-04.png";
import image3 from "./assets/hot/sider_2019_12-09.png";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SlideItem></SlideItem>
          </Col>
          <Col span={18}>
            <Banner></Banner>
          </Col>
        </Row>
        <HotTourist
          title={
            <Typography.Title level={3} type="danger">
              爆款推荐
            </Typography.Title>
          }
          sideImage={image1}
          products={productList1}
        ></HotTourist>
        <HotTourist
          title={
            <Typography.Title level={3} type="success">
              新品上市
            </Typography.Title>
          }
          sideImage={image2}
          products={productList2}
        ></HotTourist>
        <HotTourist
          title={
            <Typography.Title level={3} type="warning">
              潮人路线
            </Typography.Title>
          }
          sideImage={image3}
          products={productList3}
        />
        <Company />
      </div>
      <Footer />
    </div>
  );
}

export default App;
