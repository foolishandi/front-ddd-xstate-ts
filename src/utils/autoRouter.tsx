import { lazy } from "react";
import { Route } from "react-router-dom";

const COMPONENT_DIR = "components/";

const IS_EXACT = "e"; // 是否使用 exact 修饰

function pathHandle(key: string) {
  let path = key
    .replace(/^\./, "")
    .replace(/\.(tsx|jsx|js)$/, "")
    .replace(/\/index(\[\w+])*$/, "$1")
    .replace(/\[(\w+)]/g, "/:$1")
    .replace(/\/\//g, "/");
  return path;
}

function makeRouterMap(routers: any) {
  let routerMap = {} as any;
  let keys = routers.keys();
  for (let key of keys) {
    let path = pathHandle(key);

    let Route = null;
    // 采用正则分组的方式，取出组件名和配置，需注意匹配顺序 (){}[]
    let resultArr =
      (path.match(/(\(\w+\))*({\w+})*(\/Default)*(:\w+)*$/) as string[]) || [];
    // 处理路由组件
    if (resultArr[1]) {
      let myRouteName = resultArr[1].replace(/(\(|\))/g, "");
      Route = lazy(() => import("../ui/" + COMPONENT_DIR + myRouteName)) as any;
    }
    // 处理{}配置，可扩展
    let isExact = false;
    if (resultArr[2] && resultArr[2] === `{${IS_EXACT}}`) {
      isExact = true;
    }
    // 清除路由内配置
    path = path.replace(/(\((\w+)\))/g, "").replace(/{\w+}/g, "");

    routerMap[path] = {
      path,
      isTop: true,
      key,
      Route,
      isExact, // 添加上 exact 状态
    };
  }
  return routerMap;
}

export function childrenRouteHandler(items: any, routers: any) {
  return items.map((Item: any) => {
    let path = Item.path.toLowerCase();
    if (Item.Route) {
      return (
        <Item.Route
          key={path}
          exact
          path={`${path.replace(/\/default$/, "")}`}
          component={routers(Item.key).default}
        ></Item.Route>
      );
    }
    return (
      <Route
        key={path}
        exact
        path={`${path.replace(/\/default$/, "")}`}
        component={routers(Item.key).default}
      ></Route>
    );
  });
}

export default function routerHandle(routers: any) {
  let routerMap = makeRouterMap(routers);
  let routerMapKeys = Object.keys(routerMap);

  routerMapKeys.forEach((key) => {
    let parentPath = key.replace(/\/:\w+$/, "").replace(/\/\w+$/, "");
    let parent = routerMap[parentPath];
    // 判断 excat 的使用，由于没有子路由的情况下会自动添加 exact，只要去掉子集即可
    if (parent && !parent.isExact) {
      routerMap[key].isTop = false;
      parent.children.push(routerMap[key]);
    }
  });

  let topRouters = [] as any[];
  routerMapKeys.forEach((key) => {
    let route = routerMap[key];
    if (route.isTop) {
      topRouters.push(route);
    }
  });

  return childrenRouteHandler(topRouters, routers);
}
