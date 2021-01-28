import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  touristId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = props => {
  console.log("props", props);
  console.log(props.history);
  console.log(props.location);
  console.log(props.match);

  return <div>我是详情页面, 页面ID是:{props.match.params.touristId} </div>;
};
