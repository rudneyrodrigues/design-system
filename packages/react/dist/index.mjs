var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";

// ../tokens/dist/index.mjs
var colors = {
  primary300: "#996DFF",
  primary500: "#8257E5",
  primary700: "#633BBC",
  primary900: "#271A45",
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
  zinc950: "#09090A"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.5rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var {
  css,
  theme,
  styled,
  config,
  globalCss,
  keyframes,
  getCssText,
  createTheme
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    fonts,
    radii,
    space,
    colors,
    fontSizes,
    fontWeights,
    lineHeights
  }
});

// src/index.tsx
var Button = styled("button", {
  backgroundColor: "$primary300",
  color: "$zinc50",
  borderRadius: "$sm",
  border: "none",
  fontWeight: "$bold",
  fontFamily: "$default",
  "&:hover": {
    backgroundColor: "$primary500"
  },
  transition: "background-color 0.2s ease",
  variants: {
    size: {
      small: {
        height: "$8",
        padding: "0 $4"
      },
      medium: {
        height: "$10",
        padding: "0 $6"
      },
      large: {
        height: "$12",
        padding: "0 $8"
      }
    }
  },
  defaultVariants: {
    size: "medium"
  }
});
export {
  Button
};
