'use client'

import React, { useState } from 'react'

const navOptions = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'About Us', href: '#about' },
]

const Navbar = () => {

    const [activeNavbar, setActiveNavbar] = useState('home')

    return (
        <nav className='flex items-center justify-between py-5 px-7 bg-primary'>
            <h1 className='font-bold text-4xl uppercase text-secondary'>Velora</h1>
            <ul className='flex items-center justify-center gap-10'>
                {navOptions.map((option, index) => {
                    return <a
                        key={index}
                        href={option.href}
                        onClick={() => setActiveNavbar(option.label.toLowerCase())}
                        className={`text-lg hover:text-accent transition-all ease-linear duration-300 cursor-pointer relative select-none outline-none
                            ${activeNavbar === option.label.toLowerCase() ? 'text-accent' : 'text-secondary'}`}
                    >
                        {option.label}
                        <span className={`absolute bottom-0 -left-1 bg-linear-to-r from-secondary to-primary transition-all ease-linear duration-300
                            ${activeNavbar === option.label.toLowerCase() ? 'h-0.5 w-full' : 'h-0 w-0'}`}></span>
                        <span className={`absolute bottom-0 -left-1 bg-linear-to-t from-secondary to-primary transition-all ease-linear duration-300
                            ${activeNavbar === option.label.toLowerCase() ? 'h-full w-0.5' : 'h-0 w-0'}`}></span>
                    </a>
                })}
            </ul>
            <div>
                <button className='text-secondary hover:text-accent transition-colors ease-linear duration-300 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" fill="currentColor" height="32" viewBox="0 0 32 32">
                        <path d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar