import React from 'react';

export default function Programs() {
    return (
        <div className="container mx-auto mt-16">
            <div className="title">
                <h2 className='text-gray-700 font-bold text-center text-3xl'>PROGRAMS WE OFFER</h2>
                <p className='text-center mt-8 text-gray-600 text-lg font-semibold'>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus<br /> metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
            </div>
            <div className="flex justify-center items-center mt-8">
                <div className="w-5/12 border border-gray p-5">
                    <img src="./blog1.jpg.webp" alt="" />
                    <div className="caption mt-10 ms-3">
                        <a href="" className='text-green-700 font-bold text-3xl '>Faculty of Science</a>
                    </div>
                    <div className="para">
                        <p className='p-3 mt-5 text-lg ms-0'>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                    </div>
                    <div className="button"><a href="" className='text-emerald-700 font-bold mt-5 ms-3'>Learn more</a></div>
                </div>
                <div className="w-5/12 border border-gray ml-4 p-5">
                    <img src="./blog2.jpg.webp" alt="" />
                    <div className="caption mt-10 ms-3">
                        <a href="" className='text-green-700 font-bold text-3xl '>Faculty of Arts</a>
                    </div>
                    <div className="para">
                        <p className='p-3 mt-5 text-lg ms-0'>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                    </div>
                    <div className="button"><a href="" className='text-emerald-700 font-bold mt-5 ms-3'>Learn more</a></div>
                </div>
            </div>
        </div>
    );
}
