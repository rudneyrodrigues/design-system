import type * as Stitches from '@stitches/react'

import { styled } from './styles'

export const Button = styled('button', {
  backgroundColor: '$primary300',
  color: '$zinc50',
  borderRadius: '$sm',
  border: 'none',
  fontWeight: '$bold',
  '&:hover': {
    backgroundColor: '$primary500',
  },
  transition: 'background-color 0.2s ease',

  variants: {
    size: {
      small: {
        height: '$8',
        padding: '0 $4',
      },
      medium: {
        height: '$10',
        padding: '0 $6',
      },
      large: {
        height: '$12',
        padding: '0 $8',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonProps = Stitches.VariantProps<typeof Button>
