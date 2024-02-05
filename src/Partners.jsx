import React from 'react'

export default function Partners() {
  return (
    <div className='mt-44'> 
        <h2 className='text-gray-700 font-bold text-4xl text-center'>OUR PERTNERS</h2>
        <p className='text-center text-gray-800 text-lg font-semibold mt-8'>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus <br/>metus, sed feugiat leo posuere.</p>
        <div className="flex justify-center items-center mt-20 p-0">
            <div className="w-4/12 flex justify-center p-0">
                <img src="./brand3.png.webp" alt="" className='w-32 ' />
            </div>
            <div className="w-4/12 p-0">
                <img src="./brand4.png.webp" alt="" className='w-32 ' />
            </div>
            <div className="w-4/12">
                <img src="./brand1.png.webp" alt="" className='w-32 ' />
            </div>
            <div className="w-4/12">
                <img src="./brand2.png.webp" alt="" className='w-32 ' />
            </div>

        </div>
    </div>
  )
}
