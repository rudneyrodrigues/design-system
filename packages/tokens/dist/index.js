'use strict'
const __defProp = Object.defineProperty
const __getOwnPropDesc = Object.getOwnPropertyDescriptor
const __getOwnPropNames = Object.getOwnPropertyNames
const __hasOwnProp = Object.prototype.hasOwnProperty
const __export = (target, all) => {
  for (const name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
const __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (const key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
const __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// src/index.ts
const src_exports = {}
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space,
})
module.exports = __toCommonJS(src_exports)

// src/colors.ts
var colors = {
  primary300: '#996DFF',
  primary500: '#8257E5',
  primary700: '#633BBC',
  primary900: '#271A45',
  white: '#FFFFFF',
  black: '#000000',
  zinc50: '#FAFAFA',
  zinc100: '#E1E1E6',
  zinc200: '#C4C4CC',
  zinc300: '#8D8D99',
  zinc400: '#7C7C8A',
  zinc500: '#505059',
  zinc600: '#323238',
  zinc700: '#29292E',
  zinc800: '#202024',
  zinc900: '#121214',
  zinc950: '#09090A',
}

// src/space.ts
var space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  40: '10rem',
  64: '16rem',
  80: '20rem',
}

// src/radii.ts
var radii = {
  px: '1px',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '16px',
  full: '99999px',
}

// src/fonts.ts
var fonts = {
  default: 'Roboto, sans-serif',
  code: 'monospace',
}

// src/font-sizes.ts
var fontSizes = {
  xxs: '0.625rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '4xl': '2rem',
  '5xl': '2.5rem',
  '6xl': '3rem',
  '7xl': '4rem',
  '8xl': '4.5rem',
  '9xl': '6rem',
}

// src/font-weights.ts
var fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
}

// src/line-heights.ts
var lineHeights = {
  shorter: '125%',
  short: '140%',
  base: '160%',
  tall: '180%',
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  })
