import type * as Stitches from '@stitches/react'

import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset', // Retira todas as propriedades do botão

  minWidth: 120,
  textAlign: 'center',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  boxSizing: 'border-box',

  gap: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  transition: 'all 0.2s ease',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        height: '$8',
        padding: '0 $4',
        fontSize: '$sm',
      },
      md: {
        height: '$10',
        padding: '0 $5',
        fontSize: '$sm',
      },
      lg: {
        height: '$12',
        padding: '0 $6',
        fontSize: '$md',
      },
    },

    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$primary500',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary300',
        },
      },

      secondary: {
        color: '$white',
        backgroundColor: '$zinc800',

        '&:not(:disabled):hover': {
          backgroundColor: '$zinc700',
        },
      },

      ghost: {
        color: '$white',
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          backgroundColor: '$zinc800',
        },
      },

      outline: {
        color: '$primary300',
        backgroundColor: 'transparent',
        border: '1px solid $primary500',

        '&:not(:disabled):hover': {
          color: '$white',
          backgroundColor: '$primary500',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export type ButtonProps = Stitches.ComponentProps<typeof Button>
