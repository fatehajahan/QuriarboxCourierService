import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { CiMenuFries } from "react-icons/ci";





const Navbar = () => {
    const [dropdown, setDropdown] =  useState(false)
    const drop  =  () => {
        console.log('sdf');
        setDropdown(!dropdown);
    }

    return (
        <div className='bg-[#fff] mt-[11px] '>
            <div className="container">
                <div className="md:flex justify-between items-center py-[16px]">
                    <div className="flex justify-between items-center md:w-1/2">
                        <img src={logo} alt="" />
                        <CiMenuFries onClick={ drop } className=' text-[30px] md:hidden block cursor-pointer' />
                    </div>

                    <div className="md:w-1/2 ">
                        <ul className="md:flex hidden justify-end gap-x-[30px] transition duration-700 ">
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#F95C19] '>Home</a></li>
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#817382] hover:text-[#F95C19] transition duration-700 '>Our services</a></li>
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#817382] hover:text-[#F95C19] transition duration-700 '>About Us</a></li>
                            <li> <a href="#" className='text-[16px] font-rale font-bold text-[#817382] hover:text-[#F95C19] transition duration-700 '>What’s new?</a></li>

                            <div className="search md:flex items-center gap-4">
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