import type { Meta, StoryObj } from '@storybook/react'
import { Heading, type HeadingProps } from '@orion-ui/react'

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Title',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
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
    docs: {
      description: {
        story:
          'Por padrão, o componente Heading renderiza um elemento `<h2>`, mas podemos alterar isso usando a prop `as`.',
      },
    },
  },
}

export default meta

export const Primary: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
    weight: 'bold',
  },
}
