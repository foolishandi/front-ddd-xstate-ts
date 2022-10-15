import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";

export default function HOME() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="基于文件路径的路由系统"
            bordered={true}
            style={{ width: 300 }}
            hoverable
          >
            <h1>路由主页</h1>
            <Link to="/home/admin">
              {/* toAdmin state:{`【${auth.toString()}】`} */}
              验证页面 登录状态:{`true`}
            </Link>
            <p></p>
            {/* 路由传值 */}
            <Link to={{ pathname: "/login", state: { a: 4, b: 5 } }}>
              登录页
            </Link>
            <p></p>
            <Link to="/err">错误页</Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="xstate ddd 示例"
            bordered={true}
            style={{ width: 300 }}
            hoverable
          >
            <Link to="/home/cookieshop">xstate 测试</Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
