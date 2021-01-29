import React from "react";
import { Image, Typography } from "antd";
import { withRouter, RouteComponentProps, Link } from "react-router-dom"

interface PropsType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: string | number;
  title: string;
}

const ProductImageInfoComponent: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
  history,
  location,
  match
}) => {
  return (
    <Link to={`detail/${id}`}>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490}></Image>
      ) : (
          <Image src={imageSrc} height={120} width={240}></Image>
        )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 10)}</Typography.Text>

        <Typography.Text type="warning">¥ {price} 元起</Typography.Text>
      </div>
    </Link>
  );
};

export const ProductImageInfo = withRouter(ProductImageInfoComponent)
