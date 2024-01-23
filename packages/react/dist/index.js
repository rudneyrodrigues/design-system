"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  App: () => App
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  zinc50: "#FAFAFA",
  zinc100: "#E1E1E6",
  zinc200: "#C4C4CC",
  zinc300: "#8D8D99",
  zinc400: "#7C7C8A",
  zinc500: "#505059",
  zinc600: "#323238",
  zinc700: "#29292E",
  zinc800: "#202024",
  zinc900: "#121214",
  zinc950: "#09090A",
  primary300: "#996DFF",
  primary500: "#8257E5",
  primary700: "#633BBC",
  primary900: "#271A45"
};

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: { color: colors.primary300 }, children: "Ol\xE1 mundo" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
