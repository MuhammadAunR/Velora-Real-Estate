'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import SectionHeader from './SectionHeader'

const stats = [
    { value: '12+', label: 'Years of Experience' },
    { value: '850+', label: 'Properties Sold' },
    { value: '98%', label: 'Client Satisfaction' },
]

const AboutUs = () => {
    return (
        <section id='about' className='overflow-hidden pb-20 px-5 lg:px-10 min-h-screen h-fit'>
            <SectionHeader
                label='About Us'
                heading={'Guiding You Home,One Address at a Time'}
                description='More than an agency — a trusted partner in finding a place that truly feels like yours.'
            />

            <div className='flex flex-col lg:flex-row items-center gap-14 lg:gap-20 max-w-6xl mx-auto mt-16'>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='relative w-full lg:w-[45%] shrink-0'
                >
                    <div className='relative h-95 lg:h-120 rounded-2xl overflow-hidden shadow-2xl'>
                        <Image
                            src='/about-us-image.webp'
                            alt='Velora real estate team'
                            fill
                            loading='eager'
                            sizes='(max-width: 1024px) 90vw, 45vw'
                            className='object-cover'
                        />
                    </div>

                    <div className='absolute -right-4 top-10 lg:-right-8 lg:top-16 bg-accent text-primary px-3 py-8 rounded-lg shadow-xl flex flex-col items-center gap-2'>
                        <span className='[writing-mode:vertical-rl] rotate-180 uppercase text-xs tracking-[0.25em] font-semibold'>
                            Est. 2013 — Velora Estates
                        </span>
                    </div>

                    <div className='absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-primary text-secondary rounded-2xl px-6 py-5 shadow-xl'>
                        <span className='block text-3xl font-serif font-bold leading-none'>12+</span>
                        <span className='text-xs uppercase tracking-wider text-secondary/70'>Years Guiding Buyers Home</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                    viewport={{ once: true }}
                    className='flex flex-col gap-6 lg:max-w-lg'
                >
                    <p className='text-primary leading-relaxed'>
                        Velora was founded on a simple belief — that finding a home shouldn't feel transactional.
                        For over a decade, we've paired local market expertise with a hands-on, personal approach,
                        helping hundreds of families and investors find not just a property, but a place worth calling home.
                    </p>
                    <p className='text-primary leading-relaxed'>
                        From first walkthrough to closing day, our team stays by your side — transparent, responsive,
                        and genuinely invested in getting it right.
                    </p>

                    <div className='flex items-center gap-8 mt-4 pt-6 border-t border-secondary/15'>
                        {stats.map((stat, index) => (
                            <div key={index} className='flex flex-col'>
                                <span className='text-2xl lg:text-3xl font-serif font-bold text-primary'>{stat.value}</span>
                                <span className='text-xs lg:text-sm text-accent'>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs