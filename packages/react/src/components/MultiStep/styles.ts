import { Text } from '../Text'
import { styled } from '../../styles'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$zinc300',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  gap: '$2',
  display: 'flex',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

export const Step = styled('div', {
  height: '$1',
  width: '100%',
  borderRadius: '$px',
  backgroundColor: '$zinc600',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary300',
      },
    },
  },
})
