import { useEffect } from "react";
import shopMachine from "../../../services/machineFactory/ShopMachine";
import { atomWithMachine } from "jotai/xstate";
import { useAtom } from "jotai";
import axios from "axios";

import Header from "./components/Header";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Accond from "./components/Accond";
import { isDebugFsm } from "@utils/isFsm";

export const shopMachineAtom = atomWithMachine(shopMachine, {
  devTools: isDebugFsm,
  services: {
    dealService: ({ user }, e) => {
      console.log(e);
      return axios.post("/api/submit", user);
    },
  },
});

export default function CookieShop() {
  const [state, send] = useAtom(shopMachineAtom);
  // const [state, send] = useMachine(shopMachine, { devTools: true });
  const { isLoading, user, prds } = state.context;
  useEffect(() => {
    send("toCheck");
  }, []);

  // 状态判断
  const currentState = state.value;
  let currentStateKey = "";
  if (currentState instanceof Object) {
    currentStateKey = Object.keys(currentState)[0];
  } else {
    currentStateKey = currentState;
  }

  // 状态渲染
  const render = () => {
    switch (currentStateKey) {
      case "shopPage":
        return (
          <>
            <Header
              isLoading={isLoading}
              username={user.username}
              send={send}
            ></Header>
            <Shop isLoading={isLoading} produts={prds} send={send}></Shop>
          </>
        );
      case "loginPage":
        return <Login send={send}></Login>;
      case "accondPage":
        return <Accond {...state.context} send={send}></Accond>;
      default:
        return null;
    }
  };
  return <>{render()}</>;
}
