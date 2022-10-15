// src/components/AutoRoute/index.tsx

// 权限判断路由，判断用户是否登录，登录返回页面，未登录则跳到登录页面
import { Redirect, Route } from "react-router";
// 是否登录判断方法
import auth from "../../../utils/auth";

export default function AuthRoute({ component: Component, ...rest }: any) {
  console.log(auth);
  // 注意，组件参数应， 完全按照 Route 保障统一
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

// 配置文件路径， 例如，src/page/home/(AutoRoute)/test.tsx
// 生成路径 /home/test 同时使用 AutoRoute 包裹
