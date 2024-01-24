import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '@orion-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
