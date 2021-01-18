import React from "react";
import styles from "./SlideItem.module.css";
import { sideMenuList } from "../../mock/slideItem";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

export const SlideItem: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["slide-memu"]}>
      {sideMenuList.map((item, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {item.title}
            </span>
          }
        >
          {item.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={
                <span>
                  <GifOutlined />
                  {sm.title}
                </span>
              }
            >
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                  <span>
                    <GifOutlined />
                    {sms}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
