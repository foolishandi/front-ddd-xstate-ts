import React, { Suspense } from "react";
import "./App.css";
import routerHandle from "@utils/autoRouter";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// 通过正则排除无需创建路由文件夹，这里排除的是 components 下包含的文件
const routers = require.context(
  "./ui/",
  true,
  /^(?!.*\/(components)\/).*\.(tsx|jsx|ts)$/
);

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<>加载中···</>}>
          <Switch>
            {routerHandle(routers)}
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route path="*" exact render={() => <Redirect to="/err" />} />
            <div>1</div>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
