import React from 'react'
import ProductLogo from "@/public/logozoomed.png"
import Image from 'next/image'

const DetailSection2 = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />
      {/* LEFT */}

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>

        <div className='my-11 flex flex-wrap gap-5'>
            {Array(1).fill(1).map((_, index) => (
              <div className='w-full'>
                <h1 className='bold-52 lg:bold-88'>
                  Introducing RecyclED

                </h1>
              </div>
              
            ))}
        </div>
      </div>

      <div className='flex flex-col flex-roww-full gap-3 sm:flex-row'>
        <Image src={ProductLogo} alt="product image" width={500}/>
      </div>

      
    </section>
  )
}

export default DetailSection2