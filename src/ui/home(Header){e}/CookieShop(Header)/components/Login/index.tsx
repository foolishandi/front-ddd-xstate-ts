import { Button, Form, Input, PageHeader } from "antd";
import React from "react";

const Login = ({ send }: any) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    send({ type: "toSubmit", value: values });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <PageHeader
        ghost={false}
        // onBack={() => window.history.back()}
        title="Login"
        subTitle="请登录"
        extra={[
          <Button key="login" onClick={() => send("toBack")}>
            返回
          </Button>,
        ]}
        style={{ borderBottom: "1px solid rgba(0,0,0,.2)", marginBottom: 30 }}
      ></PageHeader>
      <Form
        name="login"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 12,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
