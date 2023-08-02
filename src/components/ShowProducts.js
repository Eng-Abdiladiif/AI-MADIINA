"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const productdata = [

    {"id":1,
    "title":"Fjallraven - Foldsack ",
    "price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    

},
{"id":2,
"title":"Mens Casual Premium  "
,"price":22.3,
"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wea",
"image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
},
{"id":3,
"title":"Mens Cotton Jacket",
"price":55.99,
"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock  this is awasing  clothes and the beauty codes chothes",
"image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
}

]

import  Aos  from "aos"
import  "aos/dist/aos.css"
function ShowProducts() {

    useEffect(() => {

        Aos.init({duration: 3000})
    })
  return (
    <div>


        {/* left */}

        <div className='text-center my-5 '>

            <h1 className='font-semibold text-md font-DM'>Show Case Clothes</h1>
        </div>
        {/* right */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:px-0 px-5'
        data-aos = "fade-left">

            {

               productdata.map(dats =>(

                <div key={dats.id} className='shadow-2xl shadow-orange-300 md:px-5 py-2  rounded-tl-2xl rounded-br-2xl 
                border border-gray-400'>

                    <div className='flex justify-between px-2'>

                        <Image src={dats.image} className='' width={100} height={100}  alt='image'/>
                        <h1 className='px-4 text-md font-DM font-bold pt-5'>{dats.title}</h1>
                    </div>

                    <div className='px-4 py-3 '>
                        
                        <p className='text-sm font-DM'>{dats.description}</p>
                    </div>
                    <div>
                        <span className='text-sm text-orange-500 font-DM px-3 font-semibold'>${dats.price}</span>
                    </div>

                    <button className='px-5  ml-3 py-2 my-2 bg-orange-400  rounded-tl-2xl rounded-br-2xl'>

                        <Link className='text-sm font-DM font-bold text-white' href= "/">Detail</Link>
                    </button>

                </div>
               ))
            }



        </div>



    </div>
  )
}

export default ShowProducts