import { ComponentProps } from 'react'
import { Check } from '@phosphor-icons/react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}