import { useState, createContext } from 'react'

export const Context = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState<string>('008d36')

  return <Context.Provider value={{ color, setColor }}>{children}</Context.Provider>
}
