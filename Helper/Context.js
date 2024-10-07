"use client"
import React from 'react'
import { createContext } from 'react'
export const MyContext = createContext();


const Context = ({children}) => {
    const userName = "Palak gupta"
  return (
    <div>
     <MyContext.Provider value={userName}>
        {children}
     </MyContext.Provider>
    </div>
  )
}

export default Context
