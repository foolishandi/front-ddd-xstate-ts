import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <h2>Login sub2</h2>
      <Link to="/">主页</Link>
      <p></p>
      <Link to="/login">登录页</Link>
    </div>
  );
}
