import { Button, PageHeader } from "antd";
import React from "react";

const Header = ({ isLoading, send, username = "" }: any) => (
  <PageHeader
    ghost={false}
    // onBack={() => window.history.back()}
    title="Xstate Shop Example"
    subTitle="This is a test"
    extra={[
      <Button
        key="login"
        onClick={() => send(`${isLoading ? "toAccond" : "toLogin"}`)}
      >
        {isLoading ? username : "登录"}
      </Button>,
      <Button
        key="logout"
        onClick={() => {
          send("toLogout");
        }}
      >
        {isLoading ? `登出` : "-"}
      </Button>,
    ]}
  ></PageHeader>
);

export default Header;
