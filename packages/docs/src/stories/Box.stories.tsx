import { Box, type BoxProps } from '@orion-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <span style={{ color: '#fff' }}>Testando o componente de Box</span>
      </>
    ),
  },
  argTypes: {
    css: {
      control: {
        disable: true,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    css: {
      width: '30rem',
      height: '20rem',
      margin: '0 auto',

      '&:hover': {
        backgroundColor: '$zinc800',
      },
    },
  },
}
