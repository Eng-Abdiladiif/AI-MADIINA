

import {BiRename,}  from "react-icons/bi"
import  {MdEmail}  from  "react-icons/md"
import {BsFillTelephonePlusFill,}  from "react-icons/bs"
import {BiSolidHomeSmile}  from "react-icons/bi"
import {GiClothes}  from "react-icons/gi"
import {TbPerfume}  from "react-icons/tb"
import {BsSmartwatch}  from "react-icons/bs"
import {FaExternalLinkSquareAlt} from "react-icons/fa"

function Footer() {
  return (
    <div className='max-w-3xl mx-auto p-4 mt-10 
    grid grid-cols-2 md:grid-cols-3 gap-5'>

        {/* one */}

        <div className='space-y-3 ' >

            {/* three type conatine */}
            <div className='flex space-x-3'>
                <BiRename className='text-xl'/>
                <h1 className='font-DM text-sm '>Al-madiina</h1>
            </div>

            {/* two */}
            <div className='flex space-x-3'>
                <MdEmail className='text-xl'/>
                <h1 className='font-DM text-sm '>Al-madiina@gmail.com</h1>

            </div>
            <div className='flex space-x-3'>
                <BsFillTelephonePlusFill className='text-xl'/>
                <h1 className='font-DM text-sm '>063-4991174</h1>

            </div>


        </div>


        {/* two */}
        <div className='space-y-2'> 

              <div className='flex space-x-3'>
              <GiClothes className='text-xl'/>
            <h1 className='font-DM text-sm '>Clothes</h1>
              </div>

              <div className='flex space-x-3'>

                <TbPerfume className='text-xl'/>
                <h1 className='font-DM text-sm '>perfume</h1>
              </div>
              <div className='flex space-x-3'>
                <BsSmartwatch className='font-DM text-sm '/>
                <h1 className='font-DM text-sm '>watch</h1>

              </div>
            
        </div>
        {/* three */}

        <div className='space-y-2'>

            <div className='flex space-x-3'>
                <FaExternalLinkSquareAlt className='font-DM text-sm '/>
                <h1 className='font-DM text-sm '>erigavo</h1>
            </div>
            <div className='flex space-x-3'>
                <BiSolidHomeSmile className='font-DM text-sm '/>
                <h1 className='font-DM text-sm '>Manhal/area</h1>
            </div>
          
            
        </div>

    </div>
  )
}

export default Footer