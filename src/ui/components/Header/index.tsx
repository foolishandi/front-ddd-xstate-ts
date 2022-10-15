// src/components/AutoRoute/index.tsx

// 权限判断路由，判断用户是否登录，登录返回页面，未登录则跳到登录页面
import { PageHeader, Button } from "antd";
import { useAtom } from "jotai";
import { Suspense } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { shopMachineAtom } from "../../home(Header){e}/CookieShop(Header)";

export default function AuthRoute({ component: Component, ...rest }: any) {
  console.log("header");
  const [machine] = useAtom(shopMachineAtom);

  // 注意，组件参数应， 完全按照 Route 保障统一
  return (
    <Suspense>
      <Route
        {...rest}
        render={(props: any) => {
          return (
            <>
              <PageHeader
                className="Header"
                // onBack={() => null}
                title="Header"
                subTitle={
                  "路由组件测：home(Header)！ 当前页:" +
                  Object.keys(machine.value)[0]
                }
                extra={[
                  <Button>
                    <Link to="/">主页</Link>
                  </Button>,
                ]}
              />
              <hr />
              <Component></Component>
            </>
          );
        }}
      />
    </Suspense>
  );
}

// 配置文件路径， 例如，src/page/home/(AutoRoute)/test.tsx
// 生成路径 /home/test 同时使用 AutoRoute 包裹
