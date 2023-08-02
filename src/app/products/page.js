import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


async function  getProducts () {

    const  res = await fetch ("https://fakestoreapi.com/products")
  
    if(!res.ok) {
  
  
      throw new Error ("Dhadada lama so dabicine")
    }
  
    return  res.json()
  }

async function page() {

    const prodcutdata = await getProducts()
  return (
    <div
    className='mt-10 max-w-3xl mx-auto p-4 '>


        {/* ledt */}
        <div>

            <h1>products</h1>
        </div>

        {/* right */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-5  md:px-0'>

            {

               prodcutdata.map((dats) =>(

                <div key={dats.id} className='shadow-2xl shadow-gray-600 border-2 border-orange-400 rounded-bl-3xl rounded-tr-3xl '>

                   {/* image */}
                   <div className='flex space-x-3  '>
                    <Image src={dats.image} className='w-40  md:w-24 md:h-24 h-40 mt-5 bg-cover blur-none px-3'  width={40} height= {40} alt= "image"/>
                    <div className='mt-10 md:space-y-4 md:mt-0 px-4 font-DM text-md 
        
                    font-bold  md:py-3 md:text-sm'>

                    <h1 className='text-sm'>{dats.title}</h1>
                   </div>
                   </div>
                   
                   <div className='px-4 my-4 md:px-2 md:my-2'>
                    <p>${dats.price}</p>
                   </div>

                   <button className='px-4 my-4 md:px-2 md:my-2'>

                    <Link className='px-4 py-2 text-sm font-DM text-white 
                    bg-orange-500 rounded-bl-3xl rounded-tr-3xl   ' href= {`/products/${dats.id.toString()}`} >
                        Details
                    </Link>
                   </button>

                </div>
               ))
            }


        </div>



    </div>
  )
}

export default page