import { ArrowRight } from '@phosphor-icons/react'
import { Button, ButtonProps } from '@orion-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,

  args: {
    size: 'md',
    disabled: false,
    children: 'Button',
  },

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
    },
    variant: {
      options: ['primary', 'secondary', 'ghost', 'outline'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'primary',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    css: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',

    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
