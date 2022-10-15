import React from "react";
import { Link } from "react-router-dom";

export default function Sub() {
  return (
    <div>
      <h2>Login sub</h2>
      <Link to="/">回到主页</Link>
      <p></p>
      <Link to="/login/test/45">toLogin test</Link>
    </div>
  );
}
