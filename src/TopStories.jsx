import React from 'react';
// import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const TopStories = () => {
    return (
        <div className=" p-4 rounded-lg mt-44">
            <div className="top flex justify-between">
                <h2 className="text-4xl font-bold mb-4">Top Stories</h2>
                <div className="button"><a href="" className='text-end text-green-700 font-bold'>More Stories</a></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-4/12 rounded-lg p-4 GAP-2">
                    <img src="./class-img1.jpg.webp" alt="" />
                    <h3 className="text-2xl font-semibold mb-2 text-center text-gray-700 mt-5 hover:text-green-700">
                        Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories
                    </h3>
                </div>
                <div className="w-4/12 rounded-lg p-4 GAP-2">
                    <img src="./class-img2.jpg.webp" alt="" />
                    <h3 className="text-2xl font-semibold mb-2 text-center text-gray-700 mt-5 hover:text-green-700">
                        Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories
                    </h3>
                </div>
                <div className="w-4/12 rounded-lg p-4 GAP-2">
                    <img src="./class-img3.jpg.webp" alt="" />
                    <h3 className="text-2xl font-semibold mb-2 text-gray-700 text-center mt-5 hover:text-green-700">
                        Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories
                    </h3>
                </div>

            </div>
        </div>
    );
};

export default TopStories;