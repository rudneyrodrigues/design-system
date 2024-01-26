import type * as Stitches from '@stitches/react'

import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$sm',
  transition: 'all 0.2s ease',
  backgroundColor: '$zinc800',
  boxShadow: '0 0 0 1px $zinc600',
})

export type BoxProps = Stitches.VariantProps<typeof Box>
