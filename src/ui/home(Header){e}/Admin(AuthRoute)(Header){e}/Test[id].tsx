import React from "react";
import { Link } from "react-router-dom";

export default function Test(props: any) {
  console.log(props);
  const params = props.match.params;
  return (
    <div>
      <h1>test/:id 动态子路由</h1>
      <h2>Test:{params.id}</h2>
      <Link to="/">回到主页</Link>
      <p></p>
      <Link to="/home/admin/test/4556">动态路由:test/4556</Link>
      <p></p>
      <Link to="/home/admin/test/45">动态路由:test/45</Link>
    </div>
  );
}
