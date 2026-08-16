'use client'
import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

const SectionHeader = ({ label, heading, description }) => {
    return (
        <motion.div
            className='flex flex-col items-center justify-center gap-4 mt-20 mb-8 px-5'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.div className='flex items-center gap-4' variants={itemVariants}>
                <motion.span
                    className='h-px bg-primary/40'
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <span className='uppercase text-xs lg:text-sm tracking-[0.3em] text-primary/70 font-medium'>
                    {label}
                </span>
                <motion.span
                    className='h-px bg-primary/40'
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </motion.div>

            <motion.h2
                className='font-serif text-4xl lg:text-6xl font-bold text-center leading-tight lg:max-w-2xl'
                variants={itemVariants}
            >
                {heading}
            </motion.h2>

            <motion.p
                className='max-w-xl text-center text-accent text-sm lg:text-base leading-relaxed'
                variants={itemVariants}
            >
                {description}
            </motion.p>
        </motion.div>
    )
}

export default SectionHeader