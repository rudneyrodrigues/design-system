import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ui-orion/react'

const meta: Meta<typeof TextArea> = {
  title: 'Form/Text Area',
  component: TextArea,

  args: {
    disabled: false,
    id: 'text-area',
    autoComplete: 'off',
    placeholder: 'Digite aqui suas observações...',
    css: {
      height: '200px',
    },
  },

  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
    },
    id: {
      table: {
        disable: true,
      },
    },
    autoComplete: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            gap: '$2',
            width: '500px',
            padding: '$10',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text as="label" size="sm" htmlFor="text-area">
            Observações:
          </Text>

          {Story()}
        </Box>
      )
    },
  ],
}

export default meta

export const Base: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
