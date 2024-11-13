import React from 'react'
import { FaSearch } from "react-icons/fa";

import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-[#fff] mt-[11px] '>
            <div className="container">
                <div className="flex justify-between items-center py-[16px]">
                    <div className="w-1/2">
                        <img src={logo} alt="" />
                    </div>

                    <div className="w-1/2 ">
                        <ul className='flex justify-end gap-x-[30px]'>
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#F95C19] '>Home</a></li>
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#817382] hover:text-[#F95C19] transition duration-700 '>Our services</a></li>
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#817382] hover:text-[#F95C19] transition duration-700 '>About Us</a></li>
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#817382] hover:text-[#F95C19] transition duration-700 '>What’s new?</a></li>

                            <div className="search flex items-center gap-4">
                                <FaSearch className='text-[#FFAF0F] bg-[#FFF1DC] text-[22px] rounded' />
                                <div className="btn"><a href="#" className='font-oxi bg-[#FFE4D9] text-[#F95C19] font-bold py-[12px] px-[20px] rounded hover:bg-[#F95C19] hover:text-[#FFE4D9] transition duration-500'>Contact us</a></div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar