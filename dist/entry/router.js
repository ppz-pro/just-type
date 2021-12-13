import React from "../../_snowpack/pkg/react.js";
import {
  HashRouter,
  Routes,
  Route
} from "../../_snowpack/pkg/react-router-dom.js";
import JustType from "../page/just-type/entry/index.js";
import Test from "../page/test/index.js";
export default function() {
  return /* @__PURE__ */ React.createElement(HashRouter, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/test",
    element: /* @__PURE__ */ React.createElement(Test, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/*",
    element: /* @__PURE__ */ React.createElement(JustType, null)
  })));
}
