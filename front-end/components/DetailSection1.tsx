import React from 'react'
import Product from "@/public/product_last draft.png"
import ProductLogo from "@/public/logozoomed.png"
import Image from 'next/image'

const DetailSection1 = () => {
  return (
    <section className='max-container padding-container items-center justify-center flex flex-col h-full xl:flex-row'>
      <div className='hero-map' />
      {/* LEFT */}

        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>

            <div className='my-11 flex flex-wrap gap-2'>
                {Array(1).fill(1).map((_, index) => (
                <div className='w-full'>
                    <h2 className='bold-40 lg:bold-88'>
                    Introducing RecyclED
                    </h2>
                    <Image src={ProductLogo} alt="product image" width={400}/>
                </div>
                
                ))}
            </div>
        </div>
        {/* <div className='flex flex-wrap'>
            <h2 className='bold-44 lg:bold-88'>
                Introducing RecyclED
            </h2>
        </div> */}

        <div className='flex flex-col flex-row w-full sm:flex-row'>
            <Image src={Product} alt="product image" width={500}/>
        </div>

      
    </section>
  )
}

export default DetailSection1