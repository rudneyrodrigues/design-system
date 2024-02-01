import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@orion-ui/react'

const meta: Meta<typeof MultiStep> = {
  title: 'Form/Multi Step',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 2,
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
          {Story()}
        </Box>
      )
    },
  ],
}

export default meta

export const Base: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 6,
    currentStep: 6,
  },
}
