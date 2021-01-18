import React from "react";
import { Dropdown, Layout, Menu, Button, Typography, Input } from "antd";

export const Footer: React.FC = () => {
  return (
    <div>
      <Layout.Footer>
        <Typography.Title
          level={3}
          style={{ textAlign: "center" }}
          type={"success"}
        >
          版权所有 @ React 旅游网
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
};
