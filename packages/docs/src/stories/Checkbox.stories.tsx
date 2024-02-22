import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ui-orion/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,

  args: {
    disabled: false,
    id: 'checkbox',
  },

  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    id: {
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
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}

          <Text as="label" size="sm" htmlFor="checkbox">
            Aceito os termos de uso
          </Text>
        </Box>
      )
    },
  ],
}

export default meta

export const Base: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
