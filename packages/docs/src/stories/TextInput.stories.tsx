import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ui-orion/react'

const meta: Meta<typeof TextInput> = {
  title: 'Form/Text Input',
  component: TextInput,

  args: {
    disabled: false,
    id: 'text-input',
    placeholder: '',
    // autoComplete: 'off',
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
  },

  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            gap: '$2',
            width: '300px',
            padding: '$10',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text as="label" size="sm" htmlFor="text-input">
            Name
          </Text>

          {Story()}
        </Box>
      )
    },
  ],
}

export default meta

export const Base: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
