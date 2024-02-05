import React from 'react';

const Resources = () => {
    return (
        <section className=" flex justify-center items-center bg-gray-100 p-8 mt-44">
            <div className="w-6/12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-medium text-start mb-6 ms-12">ESSENTIAL RESOURCES</h2>
                <p className='text-gray-800 text-xl font-normal text-start mb-6 ms-12'>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
                    Integer efficitur tellus metus, sed feugiat leo posuere.</p>
                <div className="space-y-4 p-10">
                    <div className="border border-gray-300 py-5 px-14 w-full shadow rounded bg-transparent">
                        <h3 className="text-xl font-medium mb-2">First year students</h3>
                        <p className="text-gray-700">Integer efficitur tellus metus, sed feugiat leo posuere ac.</p>
                        <p className="text-gray-700">Morbi vitae tincidunt mi, et malesuada massa.</p>
                    </div>
                    <div className="border border-gray-300 py-5 px-14 w-full shadow rounded bg-transparent">
                        <h3 className="text-xl font-medium mb-2">Tution & fees</h3>
                        <p className="text-gray-700">Integer efficitur tellus metus, sed feugiat leo posuere ac.</p>
                        <p className="text-gray-700">Morbi vitae tincidunt mi, et malesuada massa.</p>
                    </div>
                    <div className="border border-gray-300 py-5 px-14 w-full shadow rounded bg-transparent">
                        <h3 className="text-xl font-medium mb-2">International Students</h3>
                        <p className="text-gray-700">Integer efficitur tellus metus, sed feugiat leo posuere ac.</p>
                        <p className="text-gray-700">Morbi vitae tincidunt mi, et malesuada massa.</p>
                    </div>
                   
                </div>
            </div>
            <div className="w-6/12">
                <img src="./visit1.jpg.webp" alt="" />
            </div>
        </section>
    );
};

export default Resources;