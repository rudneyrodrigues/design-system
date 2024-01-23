import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  fonts,
  radii,
  space,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@orion-ui/tokens'

export const {
  css,
  theme,
  styled,
  config,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    fonts,
    radii,
    space,
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
  },
})
