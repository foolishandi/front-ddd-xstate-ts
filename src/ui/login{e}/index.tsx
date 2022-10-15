import React from "react";
import { Link } from "react-router-dom";

export default function Login(this: any, props: any) {
  // 路由传值：state
  console.log(props.location.state);
  return (
    <div>
      <h2>登录页</h2>
      <hr />
      <Link to="/">回到主页</Link>

      <p></p>
      <Link to="/login/test/45">/test/45 动态文件子路由</Link>
      <p></p>
      <Link to="/login/sub">/sub 文件夹子路由</Link>
      <Link to="/login/upper">/upper 文件子路由 </Link>
      <p></p>
      <Link to="/login/sub/sub2">/sub/sub2 二级文件夹子路由</Link>
      <p></p>
    </div>
  );
}
