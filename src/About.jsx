import React from 'react'

export default function About() {
    const inlineStyle = {
        backgroundColor: '#FCF2EB',
      };
    
    return (
        <div className='' style={inlineStyle}>
            <div className="continer">
                <div className="flex justify-center items-center p-10 ">
                    <div className="w-6/12  p-14 flex justify-end">
                        <img src="./about1.jpg.webp" alt="" />
                    </div>
                    <div className="w-6/12 p-14">
                        <h2 className='text-4xl text-gray-800 font-bold text-start'>A COMPREHENSIVE <br/>TEACHING APPROACH</h2>
                        <p className='mt-5 text-lg text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Maecenas felis felis, vulputate sit amet mauris et, semper <br/>aliquam ligula. Integer efficitur tellus metus, sed feugiat leo<br/> posuere ac. Morbi vitae tincidunt malesuada massa.</p>
                        <p className='mt-5 text-gray-400 text-lg'>Maecenas felis felis, vulputate sit amet mauris et, semper<br/> aliquam ligula. Integer efficitur tellus metus, sed feugiat leo<br/> posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                        <button className='mt-8'><a href="" className='text-emerald-700 font-bold mt-5'>Learn More</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
