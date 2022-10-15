import React from "react";
import { Link } from "react-router-dom";

export default function Upper() {
  return (
    <div>
      <h2>Login upper</h2>
      <Link to="/login">登录页</Link>
      <p></p>
      <Link to="/login/test/45">toLogin test</Link>
    </div>
  );
}
