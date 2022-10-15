import React from "react";
import { Link, useHistory } from "react-router-dom";
import LoginBar from "./components/LoginBar";

export default function Test(props: any) {
  console.log(props);
  const params = props.match.params;
  return (
    <div>
      <h2>Login Test:{params.id}</h2>
      <Link to="/login">登录页</Link>
      <p></p>
      <Link to="/login/test/4556">测试4556</Link>
      <p></p>
      <Link to="/login/test/45">测试45</Link>
      <LoginBar></LoginBar>
    </div>
  );
}
