import React, { createContext, useState } from 'react'
import { Coach } from 'types/Coach'

interface ContextProps {
  coaches: Coach[]
  setCoaches: (e: Coach[]) => void
}

export const CoachesContext = createContext<ContextProps>(null)

export const CoachesProvider = ({ children }) => {
  const [coaches, setCoaches] = useState<unknown | Coach[]>()
  const values = { coaches, setCoaches } as ContextProps

  return <CoachesContext.Provider value={values}>{children}</CoachesContext.Provider>
}
