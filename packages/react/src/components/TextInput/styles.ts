import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$zinc900',
  width: '100%',
  height: '$12',

  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $zinc900',

  display: 'flex',
  padding: '0 $4',
  alignItems: 'center',

  transition: 'all 0.2s ease-in-out',

  '&:has(input:focus)': {
    borderColor: '$primary500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('label', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$zinc300',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  borderRadius: '$sm',
  border: 0,
  color: '$white',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',
  lineHeight: '$base',
  width: '100%',
  height: '100%',
  outline: 'none',

  '::placeholder': {
    color: '$zinc300',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
