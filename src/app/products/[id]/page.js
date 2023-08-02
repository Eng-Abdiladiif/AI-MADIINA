import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


async function  getSingleproduct({params}) {

    console.log(params)

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)

    if(!res.ok) {


        throw new Error("dhatad lama dabicin")
    }

    return  res.json()
}

async function page( {params}) {

    const data = await  getSingleproduct({params})
    console.log(data)
  return (
    <div className='max-w-2xl mx-auto mt-20 justify-center items-center'>

        <div>

            {   

                data  &&  <div className='shadow-2xl shadow-orange-400 border border-gray-500
                rounded-tl-3xl rounded-br-3xl flex flex-col
                md:w-96 md:h-96 w-96 h-96  px-3 py-3 mx-auto justify-center items-center'>


                     <div className='space-y-3'>

                        <Image src={data.image} className='w-40 h-40' width={100}  height={100} alt='image'/>

                        <h1 className='px-5 font-DM text-sm font-bold '>{data.title}</h1>
                     </div>
                     <div className='py-4 '>

                        <p className='font-bold font-Lilita text-orange-500'>${data.price}</p>
                     </div>


                     <div className=''>

                        <button className=' px-5 py-2 bg-orange-600 rounded-tl-3xl rounded-br-3xl
                        hover:bg-orange-400 transition-all duration-500'>
                            <Link className='font-Lilita text-sm text-white font-bold' href= ''>
                                Add Cart
                            </Link>
                        </button>
                     </div>



                </div>
            
            }


        </div>




    </div>
  )
}

export default page