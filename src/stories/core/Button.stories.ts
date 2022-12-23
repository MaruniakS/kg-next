import { Button } from '@core/components/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
  },
}
