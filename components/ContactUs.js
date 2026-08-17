'use client'
import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import Button from './UI/Button'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import { motion } from 'motion/react'
import { toast } from 'react-toastify'

const ContactUs = () => {

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        query: "",
    })

    const handleFormData = (e) => {
        const { name, value } = e.target
        setFormdata(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormValidation = () => {
        if (!formdata.name.trim()) {
            return 'Name field required'
        } else if (!formdata.email.trim()) {
            return 'Email field required'
        } else if (!formdata.query.trim()) {
            return 'Query field required'
        }
    }

    const handleFormSubmit = () => {
        const error = handleFormValidation()
        if (error) {
            toast.warning(error)
            return
        }
        const { name, email, query } = formdata

        const subject = `New Consultation Request from ${name}`
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Message: ${query}`
        ].join('\n')

        const mailtoLink =
            `mailto:maunrasheed.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        window.location.href = mailtoLink
        setFormdata({
            name: "",
            email: "",
            query: "",
        })
        toast.success('Consultation Request Sent')
    }

    return (

        <>
            <main id='contact' className='pb-20 px-10'>
                <SectionHeader
                    label={'Contact Us'}
                    heading={"We\'d Love To, Hear From You"}
                    description={'Have a property in mind or just exploring your options? Reach out — our team is ready to help you take the next step.'}
                />
                <section className='grid grid-cols-1 lg:grid-cols-2 w-full gap-10 py-7'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='flex flex-col items-start gap-8'>

                        <div className='flex flex-col gap-3'>
                            <h3 className='font-serif text-2xl lg:text-3xl font-bold'>Get In Touch</h3>
                            <p className='text-accent leading-relaxed'>
                                Whether you're ready to schedule a viewing or just have a few questions,
                                our team is here to help — reach out through any of the channels below.
                            </p>
                        </div>

                        <div className='flex flex-col items-start gap-5'>
                            <div className='flex items-center justify-start gap-2'>
                                <span className='bg-primary text-secondary p-2 rounded-full'><Mail /></span>
                                <a href='mailto:maunrasheed.dev@gmail.com'>maunrasheed.dev@gmail.com</a>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <span className='bg-primary text-secondary p-2 rounded-full'><PhoneCall /></span>
                                <span>+92 328 6536520</span>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <span className='bg-primary text-secondary p-2 rounded-full'><MapPin /></span>
                                <span>Dunajska cesta 136, 1000 Ljubljana, Slovenia 🇸🇮</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 pt-4 border-t border-primary/15 w-full'>
                            <span className='text-xs uppercase tracking-[0.2em] text-primary/60 font-medium'>Office Hours</span>
                            <p className='text-sm text-accent'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className='text-sm text-accent'>Saturday: 10:00 AM - 4:00 PM</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='flex flex-col items-end gap-7'>
                        <div className='w-full'>
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                onChange={handleFormData}
                                value={formdata.name}
                                name='name'
                                placeholder='Jhon Doe'
                                className='bg-secondary/50 w-full outline-none border-2 border-transparent text-lg font-semibold text-gray-700 py-3 px-5 rounded-md hover:border-primary transition-colors ease-linear duration-300' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                onChange={handleFormData}
                                value={formdata.email}
                                name='email'
                                placeholder='jhondoe@gmail.com'
                                className='bg-secondary/50 w-full outline-none border-2 border-transparent text-lg font-semibold text-gray-700 py-3 px-5 rounded-md hover:border-primary transition-colors ease-linear duration-300' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="query"></label>
                            <textarea
                                id="query"
                                onChange={handleFormData}
                                value={formdata.query}
                                name='query'
                                placeholder='Enter your query here...'
                                cols={12}
                                rows={5}
                                className='bg-secondary/50 w-full outline-none border-2 border-transparent text-lg font-semibold text-gray-700 py-3 px-5 rounded-md hover:border-primary transition-colors ease-linear duration-300'
                            ></textarea>
                        </div>
                        <span onClick={handleFormSubmit}>
                            <Button text={'Submit'} />
                        </span>
                    </motion.div>
                </section>
            </main>
        </>
    )
}

export default ContactUs