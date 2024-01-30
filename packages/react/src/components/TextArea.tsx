import type * as Stitches from '@stitches/react'

import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$zinc900',
  width: '100%',

  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $zinc900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  // transition: 'all 0.2s ease-in-out',

  '&:focus': {
    outline: 'none',
    borderColor: '$primary500',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',

    resize: 'none',
  },

  '&:placeholder': {
    color: '$zinc300',
  },
})

export type TextAreaProps = Stitches.VariantProps<typeof TextArea>
