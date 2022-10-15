import React from "react";
import { Link } from "react-router-dom";

export default function Admin(props: any) {
  console.log(props);
  return (
    <div>
      <h2>Admin</h2>
      <Link to="/">回到主页</Link>
      <p></p>
      <Link to="/home/admin/test/45">测试页test 动态子路由</Link>
    </div>
  );
}
