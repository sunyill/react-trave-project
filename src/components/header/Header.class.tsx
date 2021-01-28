
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Dropdown, Layout, Menu, Button, Typography, Input } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "react-router-dom"
import store, { RootState } from '../../redux/store'
import { withTranslation, WithTranslation } from 'react-i18next'
import { addNewLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageActions'
import { Dispatch } from 'redux'

import { connect } from "react-redux"
/**
 * 
 * 使用redux处理数据
 *
 * 类组件 使用 i18n  
 */



const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
    languageList: state.languageList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code:"en" | "zh") => {
      const action = changeLanguageActionCreator(code)
      dispatch(action)
    },
    addLanguage: (name:string, code:string) => {
      const action = addNewLanguageActionCreator(name,code);
      dispatch(action)
    }
  }
}

type PropsType = RouteComponentProps & WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
class HeaderComponents extends React.Component<PropsType>{

  changeMenuItemHandle=(e) =>{
    if (e.key === "new") {
      // const action = addNewLanguageActionCreator("newLanguage", "新语言")
      // store.dispatch(action)
      this.props.addLanguage("newLanguage", "新语言")
    } else {
      // const action = changeLanguageActionCreator(e.key)
      // store.dispatch(action)
      this.props.changeLanguage(e.key)
    }

  }
  render() {
    const { history, t } = this.props;   // 获取路由history 对象
    return (
      <div className={styles["app-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>{t("header.slogan")}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.changeMenuItemHandle}>
                  {this.props.languageList.map(mm => {
                    return <Menu.Item key={mm.code}>{mm.name}</Menu.Item>
                  })}
                  <Menu.Item key="new">{t("header.add_new_language")}</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.props.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => { history.push('register') }}>{t("header.register")}</Button>
              <Button onClick={() => { history.push('signIn') }}>{t("header.signin")}</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => { history.push('/') }} >
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Typography.Title level={3} className={styles.title}>
              {t("header.title")}
            </Typography.Title>
          </span>
          <Input.Search
            placeholder={"请输入旅游目的地,主题,或关键字"}
            className={styles["search-input"]}
          ></Input.Search>
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>

        </Menu>
      </div>
    )
  }
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(withRouter(HeaderComponents))
);
