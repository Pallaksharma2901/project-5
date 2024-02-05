import React from 'react'


export default function Colorlib() {
    return (
        <div>


            <nav className="bg-white border-gray-200 dark:bg-gray-900 flex  items-center">
                <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
                    <a href="#" className="flex items-center justify-center">
                        <img src="./logo.png.webp" className=" h-16 w-full" alt="" />
                    </a>
                    </div>
                    <div className=" flex items-start justify-center w-full" id="navbar-language">
                        <ul className="flex items-start font-medium  md:space-x-8">
                            <li>
                                <a href="#" className="block py-2 px-3 text-emerald-700  rounded md:bg-transparent md:p-0 ">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900  md:hover:text-emerald-700 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900  md:hover:text-emerald-700 ">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900  md:hover:text-emerald-700 ">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900  md:hover:text-emerald-700 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex items-center justify-center w-full" id="navbar-language">
                        <ul className="flex items-start font-medium p-4 mt-4 md:space-x-8 ">
                            <li>
                                <a href="#" className="block  text-gray-700  rounded md:bg-transparent md:p-0 "><span className='text-emerald-700 '>Call Us : </span> 0 (78) 675 3674</a>
                            </li>
                            <li>
                                <a href="#" className="block m-0 p-0 text-2xl  text-blue-900  md:hover:text-emerald-700 "><i class="ri-facebook-box-fill"></i></a>
                            </li>
                            <li>
                                <a href="#" className="block m-0 p-0 text-2xl  text-blue-900  md:hover:text-emerald-700 "><i class="ri-twitter-line"></i></a>
                            </li>
                            <li>
                                <a href="#" className="block m-0 p-0 text-2xl  text-red-500  md:hover:text-emerald-700 "><i class="ri-youtube-fill"></i></a>
                            </li>
                            <li>
                                <a href="#" className="block m-0 p-0 text-2xl  text-green-900  md:hover:text-emerald-700 "><i class="ri-mail-line"></i></a>
                            </li>
                        </ul>
                    </div>
                
            </nav>


        </div>
    )
}
