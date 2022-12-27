import NumberCard from '@components/rebranding/NumberCard'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NumberCard> = {
  title: 'Components/Rebranding/NumberCard',
  component: NumberCard,
  tags: ['autodocs'],
  args: {
    caption: 'Caption',
    value: '100',
    bgcolor: '#9EDC57',
    color: '#000000',
    height: '200px',
    width: '200px'
  },
}

export default meta
type Story = StoryObj<typeof NumberCard>

export const Primary: Story = {}
