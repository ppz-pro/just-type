import React from "../../../../_snowpack/pkg/react.js";
import {
  Routes,
  Route
} from "../../../../_snowpack/pkg/react-router-dom.js";
import Head from "./head/index.js";
import Yeah from "../page/yeah/index.js";
export default function() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Head, null), /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Yeah, null)
  })));
}
