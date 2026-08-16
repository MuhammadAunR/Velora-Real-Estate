'use client'

import { createContext, useContext, useState } from "react"
import React from 'react'

const NavContext = createContext()
export const useNavbar = () => useContext(NavContext)

const NavbarContext = ({ children }) => {

    const [isNavOpen, setisNavOpen] = useState(false)
    const [activeNavbar, setActiveNavbar] = useState('home')

    const toggleNavDrawer = () => {
        setisNavOpen(prev => !prev)
    }
    return (
        <NavContext.Provider value={{ isNavOpen, toggleNavDrawer, activeNavbar, setActiveNavbar }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavbarContext