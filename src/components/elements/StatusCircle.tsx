import { chatStatusColor } from '@/types/colorTypes'

export function GreenDot(color: chatStatusColor) {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6">
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  )
}
