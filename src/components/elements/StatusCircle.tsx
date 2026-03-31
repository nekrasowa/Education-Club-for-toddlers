import { chatStatusColor } from '@/types/colorTypes'

export function GreenDot(color: chatStatusColor) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15">
      <circle cx="6" cy="6" r="6" fill={color} />
    </svg>
  )
}
