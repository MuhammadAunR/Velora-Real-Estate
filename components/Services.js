'use client'

import { MapPin, UserPen, ClipboardList, Handshake } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
            <main className='min-h-screen h-fit w-full bg-radial from-secondary/50 to-white'>

                <section className='flex items-center justify-between py-15'>
                    <div className='relative h-100 w-150'>
                        <Image
                            src={'/services-section-image.webp'}
                            alt='Houses'
                            fill
                            sizes='1000px'
                            className='w-full h-full rounded-r-2xl shadow-2xl'
                        />
                    </div>
                    <div className='flex flex-col gap-5 pr-10'>
                        <h1 className='text-4xl lg:text-6xl font-bold font-heading'>We Help You To <br />Find Your Dream Home</h1>
                        <p className='max-w-2xl'>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col items-start'>
                                <span className='text-3xl leading-none font-bold'>8K+</span>
                                <span>Houses Available</span>
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='text-3xl leading-none font-bold'>8K+</span>
                                <span>Houses Available</span>
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='text-3xl leading-none font-bold'>8K+</span>
                                <span>Houses Available</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='flex flex-col items-center justify-center gap-5 py-10'>
                        <h2 className='text-4xl lg:text-6xl font-bold font-heading'>Why Choose Us</h2>
                        <p className='max-w-2xl text-center'>Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-10">
                        {whyChooseUsData.map((data, index) => {
                            const Icon = data.icon;
                            console.log(data.icon, Array.isArray(data.icon));
                            return (
                                <div
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
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main >
        </>
    )
}

export default Services