import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DebugFsm } from "./utils/isFsm";

import "@mock/index";
import "antd/dist/antd.min.css";
DebugFsm();

ReactDOM.render(<App></App>, document.getElementById("root") as HTMLElement);

reportWebVitals();
