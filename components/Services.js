'use client'

import { MapPin, UserPen, ClipboardList, Handshake } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'motion/react'

const Services = () => {

    const whyChooseUsData = [
        {
            icon: MapPin,
            title: 'Expert Guidance',
            description: "Benefit from our team's seasoned expertise for a smooth buying experience"
        },
        {
            icon: UserPen,
            title: 'Personalized Service',
            description: 'Our services adapt to your unique needs, making your journey stress-free'
        },
        {
            icon: ClipboardList,
            title: 'Transparent Process',
            description: 'Stay informed with our clear and honest approach to buying your home'
        },
        {
            icon: Handshake,
            title: 'Exceptional Support',
            description: 'Providing peace of mind with our responsive and attentive customer service'
        }
    ]
    return (
        <>
            <main id='services' className='min-h-screen h-fit w-full bg-radial from-secondary/50 to-white px-5 lg:px-10'>

                <section>
                    <SectionHeader
                        label={'Why Choose Us'}
                        heading={'Elevating Your Home Buying Experience'}
                        description={'Expertise, integrity, and unmatched personalized service — every step, every detail, tailored to you.'}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-10">
                        {whyChooseUsData.map((data, index) => {
                            const Icon = data.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.10, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    key={data.title}
                                    className="bg-secondary/50 rounded-2xl p-6 text-left hover:-translate-y-1 transition-all duration-300 relative"
                                >
                                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-accent" />
                                    </div>

                                    <h3 className="font-bold tracking-wide text-lg mb-2">
                                        {data.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed">
                                        {data.description}
                                    </p>

                                    <span className="absolute top-0 right-5 text-accent/50 font-heading font-bold text-5xl">
                                        0{index + 1}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                <section className='flex flex-col lg:flex-row items-center justify-between gap-x-10 gap-y-5 py-15 lg:w-10/12 mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.95 }}
                        viewport={{ once: true }}
                        className='relative h-130 w-full lg:h-100 lg:w-150'>
                        <Image
                            src={'/services-section-image.webp'}
                            alt='Houses'
                            fill
                            sizes='1000px'
                            className='w-full h-full shrink-0 rounded-2xl shadow-2xl'
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.40 }}
                        viewport={{ once: true }}
                        className='flex flex-col gap-7 lg:gap-10 w-full lg:w-1/2'>
                        <h1 className='text-4xl lg:text-6xl font-bold font-heading'>We Help You To <br />Find Your Dream Home</h1>
                        <p className='max-w-2xl'>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
                        <div className='flex items-center justify-between gap-5 max-md:flex-wrap'>
                            <div className='flex flex-col items-start'>
                                <span className='text-3xl leading-none font-bold'>250+</span>
                                <span>Properties Listed</span>
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='text-3xl leading-none font-bold'>850+</span>
                                <span>Properties Sold</span>
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='text-3xl leading-none font-bold'>8+</span>
                                <span>Years of Experience</span>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main >
        </>
    )
}

export default Services