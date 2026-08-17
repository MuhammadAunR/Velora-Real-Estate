'use client'

import React from 'react'
import Button from './UI/Button'
import Image from 'next/image'
import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { whatsappConsultationLink } from '@/constants/Data'


const HeroSection = () => {
    return (
        <>
            <main id='home' className='w-full h-[calc(100vh-80px)] flex flex-col lg:flex-row gap-y-12 gap-x-7 items-center overflow-hidden mt-20'>
                <section className='flex flex-col items-start gap-3 w-full lg:w-1/2 lg:pl-10 max-lg:px-10 max-lg:mt-10'>
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
                        className='font-bold text-4xl lg:text-8xl'>Find Your Dream House, <br className='max-lg:hidden' />Effortlessly</motion.h1>
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
                        <div className='flex flex-col items-start gap-2'>

                            <a href="#gallery">
                                <Button text={'Explore Properties'} />
                            </a>

                            <motion.a
                                href={whatsappConsultationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.95 }}
                                className='relative flex items-center py-3 px-12 border-2 border-primary text-primary rounded-full cursor-pointer text-lg lg:text-xl font-bold uppercase hover:bg-primary hover:text-secondary transition-colors ease-linear duration-300 overflow-hidden group'>
                                <span className='group-hover:-translate-x-5 transition-all ease-linear duration-300'>
                                    Book A Consultation
                                </span>
                                <span className='absolute -right-10 group-hover:right-7 transition-all ease-linear duration-300'><MessageCircle /></span>
                            </motion.a>
                        </div>
                    </motion.span>
                </section>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.95, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative w-full lg:w-1/2 h-full">
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