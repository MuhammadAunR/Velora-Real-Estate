'use client'
import { navOptions, whatsappConsultationLink } from '@/constants/Data'
import { useNavbar } from '@/context/NavbarContext'
import { motion, AnimatePresence } from 'motion/react'
import React from 'react'
import useBlockYScroll from '../hooks/BlockYScroll'
import { MessageCircle } from 'lucide-react'

const NavDrawer = () => {

    const { isNavOpen, toggleNavDrawer, activeNavbar, setActiveNavbar, handleNavClick } = useNavbar()
    useBlockYScroll(isNavOpen)

    return (
        <>
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleNavDrawer}
                        className='fixed inset-0 top-20 bg-primary/40 backdrop-blur-sm z-90 lg:hidden'
                    />
                )}
            </AnimatePresence>

            <aside className={`h-screen w-100 top-15 bg-primary fixed z-200 px-10 py-15 transition-all ease-linear duration-300 lg:hidden
                ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className='flex flex-col items-start justify-center gap-7'>
                    {navOptions.map((option, index) => {
                        return <motion.a
                            initial={{ opacity: 0, x: 30 }}
                            animate={isNavOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                            key={index}
                            href={option.href}
                            onClick={() => {
                                handleNavClick(option.href.slice(1));
                                toggleNavDrawer();
                            }}
                            className={`text-2xl font-semibold hover:text-accent transition-all ease-linear duration-300 cursor-pointer relative select-none outline-none
                            ${activeNavbar === option.label.toLowerCase() ? 'text-accent' : 'text-secondary'}`}
                        >
                            {option.label}
                            <span className={`absolute bottom-0 -left-1 bg-linear-to-r from-secondary to-primary transition-all ease-linear duration-300
                            ${activeNavbar === option.label.toLowerCase() ? 'h-0.5 w-full' : 'h-0 w-0'}`}></span>
                            <span className={`absolute bottom-0 -left-1 bg-linear-to-t from-secondary to-primary transition-all ease-linear duration-300
                            ${activeNavbar === option.label.toLowerCase() ? 'h-full w-0.5' : 'h-0 w-0'}`}></span>
                        </motion.a>
                    })}
                </ul>

                <div className='my-15'>
                    <motion.a
                        href={whatsappConsultationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleNavDrawer}
                        whileTap={{ scale: 0.95 }}
                        className='relative bg-secondary flex items-center py-3 px-12 border-2 border-primary text-primary rounded-full cursor-pointer text-lg font-bold uppercase hover:border-secondary hover:bg-primary hover:text-secondary transition-colors ease-linear duration-300 overflow-hidden group'>
                        <span className='-translate-x-5'>
                            Book A Consultation
                        </span>
                        <span className='absolute right-7'><MessageCircle /></span>
                    </motion.a>
                </div>
            </aside>
        </>
    )
}

export default NavDrawer