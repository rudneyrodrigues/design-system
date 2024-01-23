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
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx("h1", { style: { color: colors.primary300 }, children: "Ol\xE1 mundo" });
}
export {
  App
};
