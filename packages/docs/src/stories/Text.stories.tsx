import { Text, type TextProps } from '@orion-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc eu mi efficitur porta. Sed porta velit et luctus tempor.',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
    weight: {
      options: ['regular', 'medium', 'bold'],
      control: {
        type: 'select',
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    layout: 'centered',
    controls: {
      hideNoControlsWarning: true,
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    size: 'md',
    weight: 'regular',
    css: {
      width: '20rem',
    },
  },
}
