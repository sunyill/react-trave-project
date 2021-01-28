import React from "react";
import {  Layout,Typography } from "antd";
import {useTranslation,WithTranslation} from 'react-i18next'

export const Footer: React.FC = () => {
  const {t} = useTranslation()
  return (
    <div>
      <Layout.Footer>
        <Typography.Title
          level={3}
          style={{ textAlign: "center" }}
          type={"success"}
        >
          {t('footer.detail')}
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
};
