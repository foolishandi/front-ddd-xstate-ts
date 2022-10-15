import { Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Err() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/">返回主页</Link>}
      />
    </div>
  );
}
