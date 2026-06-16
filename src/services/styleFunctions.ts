import { TBlockSide, conLeft, conRight } from '@/types/commonTypes'

export function blockSide(i: number): TBlockSide {
  return i % 2 === 0 ? conLeft : conRight
}
