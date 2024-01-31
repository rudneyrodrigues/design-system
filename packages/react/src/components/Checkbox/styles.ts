import * as Checkbox from '@radix-ui/react-checkbox'

import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  width: '$6',
  height: '$6',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: '$xs',
  boxSizing: 'border-box',
  backgroundColor: '$zinc900',
  border: '2px solid $zinc900',

  // add transition in border-color and background-color
  transition: 'border-color 0.2s ease, background-color 0.2s ease',

  '&[data-state=checked]': {
    backgroundColor: '$primary300',
    borderColor: '$primary300',
  },

  '&:focus': {
    border: '2px solid $primary300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',

  width: '$4',
  height: '$4',

  '&[data-state=checked]': {
    animation: `${slideIn} 0.2s ease-out`,
  },

  '&[data-state=unchecked]': {
    animation: `${slideOut} 0.2s ease-out`,
  },
})
