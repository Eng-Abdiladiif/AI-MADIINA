import React from 'react'
import showimage from "../../public/showes.png"
import Image from 'next/image'
import Link from 'next/link'
import ShowProducts from '@/components/ShowProducts'
import Services from '@/components/Services'

function page() {
  return (
    
    <main className='max-w-4xl mx-auto p-4 mt-5 
    '>

      <div className='flex flex-col-reverse md:flex-row '>
        {/* left */}

        <div className='md:w-1/2 w-full px-5 space-x-2 mt-5 '>

          <h1 className='font-Lilita  md:text-4xl 
          text-3xl font-bold '>Fashion  
          <span className='text-orange-600 pl-2'>style</span></h1>
          <p className='py-3 font-DM text-sm'>Al-madiin waa E-commerce store taso lagu talo
            gal inaad ka hesho alaab ku rali gelisa kuna xaragoon doontiid
          </p>

          <button className='px-5 py-2 border border-black bg-orange-400 rounded-tl-2xl rounded-br-2xl 
          hover:bg-orange-500 hover:scale-95 transition-all duration-500'>

            <Link className='text-sm font-DM text-white font-semibold'  href= "/">product</Link>
          </button>

        </div>
        {/* right */}

        <div>

          <Image src={showimage} alt='image'/>
        </div>

      </div>


      <ShowProducts/>
      <Services />


    </main>
  )
}

export default page
