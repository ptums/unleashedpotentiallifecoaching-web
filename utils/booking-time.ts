import { MouseEvent } from 'react'

const handleBooking = (e: MouseEvent<HTMLButtonElement>): boolean => {
  e.preventDefault()

  console.log('well get there!')

  return true
}

export default handleBooking
