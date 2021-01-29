import React from "react";
import {
  Header,
  Footer,
  Banner,
  SlideItem,
  HotTourist,
  Company
} from "../../components";
import { Row, Col, Typography, Spin } from "antd";
import image1 from "../../assets/hot/sider_2019_02-04-2.png";
import image2 from "../../assets/hot/sider_2019_02-04.png";
import image3 from "../../assets/hot/sider_2019_12-09.png";
import styles from "./HomePage.module.css";
import { withTranslation, WithTranslation } from 'react-i18next'
import axios from 'axios'
import { RootState } from '../../redux/store'
import {
  fetchRecommendProductStartActionCreator,
  fetchRecommendProductSuccessActionCreator,
  fetchRecommendProductFailActionCreator,
} from '../../redux/recommendProducts/recommendProductsActions'
import { connect } from "react-redux"

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    productList: state.recommendProducts.productList,
    error: state.recommendProducts.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: () => {
      dispatch(fetchRecommendProductStartActionCreator())
    },
    fetchSuccess: (data) => {
      dispatch(fetchRecommendProductSuccessActionCreator(data))
    },
    fetchFail: (error) => {
      dispatch(fetchRecommendProductFailActionCreator(error))
    }
  }
}
type PropsTypes = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
class HomePageComponent extends React.Component<PropsTypes> {

  async componentDidMount() {
    this.props.fetchStart()
    try {
      const { data } = await axios.get("http://123.56.149.216:8080/api/productCollections")
      this.props.fetchSuccess(data)
    } catch (error) {
      this.props.fetchFail(error.message) 
    }

  }

  render() {
    const { t, productList, loading, error } = this.props


    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      );
    }
    if (error) {
      return <div>网站出错：{error}</div>;
    }
    return (
      <>
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
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={image1}

            products={productList[0].touristRoutes}
          ></HotTourist>
          <HotTourist
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={image2}
            products={productList[1].touristRoutes}
          ></HotTourist>
          <HotTourist
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={image3}
            products={productList[2].touristRoutes}
          ></HotTourist>
          <Company />
        </div>
        <Footer />
      </>
    );
  }
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent)) 
