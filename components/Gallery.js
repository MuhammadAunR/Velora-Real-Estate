'use client'
import React from 'react'
import SectionHeader from './SectionHeader'
import { motion } from 'motion/react'
import Image from 'next/image'

const Gallery = () => {
  const properties = [
    { id: 1, name: 'Hillside Estate', location: 'Beverly Hills', image: '/gallery-image-1.webp', size: 'large' },
    { id: 2, name: 'Modern Loft', location: 'Downtown', image: '/gallery-image-2.webp', size: 'small' },
    { id: 3, name: 'Coastal Villa', location: 'Malibu', image: '/gallery-image-3.webp', size: 'small' },
    { id: 4, name: 'Garden Residence', location: 'Bel Air', image: '/gallery-image-4.webp', size: 'small' },
  ]
  const featured = properties.find(p => p.size === 'large')
  const rest = properties.filter(p => p.size === 'small')
  return (
    <>
      <main id='gallery'>
        <SectionHeader
          label={'Gallery'}
          heading={'Discover Your Next Address'}
          description={"Every property tells a story. Here's a look at some of the addresses we're proud to represent."}
        />

        <section className='px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto mt-14'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='relative lg:col-span-2 h-85 lg:h-130 rounded-2xl overflow-hidden group cursor-pointer'
            >
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                loading='eager'
                sizes='(max-width: 1024px) 100vw, 65vw'
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent' />
              <div className='absolute bottom-0 left-0 p-6 lg:p-8'>
                <span className='text-secondary/70 text-xs uppercase tracking-[0.2em]'>{featured.location}</span>
                <h3 className='font-serif text-2xl lg:text-4xl font-bold text-secondary mt-1'>{featured.name}</h3>
              </div>
            </motion.div>

            <div className='grid grid-cols-1 gap-4 lg:gap-5'>
              {rest.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className='relative h-40 lg:h-41 rounded-2xl overflow-hidden group cursor-pointer'
                >
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes='(max-width: 1024px) 100vw, 33vw'
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-primary/80 via-primary/5 to-transparent' />
                  <div className='absolute bottom-0 left-0 p-4'>
                    <span className='text-secondary/70 text-[10px] uppercase tracking-[0.2em]'>{property.location}</span>
                    <h4 className='font-serif text-lg font-bold text-secondary'>{property.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Gallery