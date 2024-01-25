import { Box, Text, type BoxProps } from '@orion-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Layout/Box',
  component: Box,

  args: {
    children: <Text>Testando o componente de Box</Text>,
  },

  argTypes: {
    css: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    layout: 'centered',
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    css: {
      width: '30rem',
      height: '20rem',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        backgroundColor: '$zinc800',
      },
    },
  },
}
