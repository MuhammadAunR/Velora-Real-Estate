'use client'

import { createContext, useContext, useRef, useState } from "react"
import React from 'react'

const NavContext = createContext()
export const useNavbar = () => useContext(NavContext)

const NavbarContext = ({ children }) => {

    const [isNavOpen, setisNavOpen] = useState(false)
    const [activeNavbar, setActiveNavbar] = useState('home')
    let isClickScrolling = useRef(false)

    const toggleNavDrawer = () => {
        setisNavOpen(prev => !prev)
    }

    const handleNavClick = (sectionId) => {
        isClickScrolling.current = true
        setActiveNavbar(sectionId)

        setTimeout(() => {
            isClickScrolling.current = false
        }, 1000)
    }
    return (
        <NavContext.Provider value={{ isNavOpen, toggleNavDrawer, activeNavbar, setActiveNavbar, handleNavClick, isClickScrolling }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavbarContext