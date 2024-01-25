import { Avatar, AvatarProps } from '@orion-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    size: 'md',
    alt: 'Rudney Rodrigues do Nascimento',
    src: 'https://avatars.githubusercontent.com/u/68288226?v=4',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://avatars.githubusercontent.com/u/68288226?v=4',
    },
    css: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

export const Default: StoryObj<AvatarProps> = {}

export const WithCallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },

  argTypes: {
    src: {
      table: {
        disable: true,
      },
    },
  },
}
