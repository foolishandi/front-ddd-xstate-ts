import { inspect } from "@xstate/inspect";
import Split from "split.js";

export function isDebugFsm() {
  return process.env.NODE_ENV === "development";
}

export function DebugFsm() {
  if (isDebugFsm()) {
    inspect({
      iframe: document.getElementById("xstate-inspect") as any,
      url: "https://apis.leping.fun/viz?inspect&panel=false",
    });

    Split(["#xstate-inspect", "#root"], { minSize: 0, sizes: [0, 100] });
  } else {
    const root = document.createElement("div");

    document.querySelector(".split")?.remove?.();
    root.id = "root";
    document.body.appendChild(root);
  }
}
