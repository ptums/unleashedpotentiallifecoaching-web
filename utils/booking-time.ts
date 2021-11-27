import { MouseEvent } from 'react'

export const handleBooking = (e: MouseEvent<HTMLButtonElement>): boolean => {
  e.preventDefault()

  console.log('well get there!')

  return true
}
