'use client'

import React from 'react'
import Button from './UI/Button'
import Image from 'next/image'
import { motion } from 'motion/react'


const HeroSection = () => {
    return (
        <>
            <main id='home' className='w-full h-[calc(100vh-80px)] flex items-center overflow-hidden'>
                <section className='flex flex-col items-start gap-3 w-1/2 pl-10'>
                    <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='uppercase'>Where Luxury Meets Location</motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='font-bold text-3xl lg:text-8xl'>Find Your Dream House, <br />Effortlessly</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='max-w-xl'>Discover premium properties tailored to your lifestyle. From cozy apartments to luxury villas, we connect you with verified listings, expert agents, and a seamless buying experience — all in one place.</motion.p>
                    <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Button text={'Explore Properties'} />
                    </motion.span>
                </section>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.95, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative w-1/2 h-full">
                    <Image
                        src="/hero-section.webp"
                        alt="Luxury property"
                        fill
                        sizes='1200px'
                        loading='eager'
                        className="rounded-tl-[40%] w-full h-full object-cover shadow-[0px_10px_20px_rgb(31,42,68)]"
                    />
                </motion.div>
            </main>
        </>
    )
}

export default HeroSection