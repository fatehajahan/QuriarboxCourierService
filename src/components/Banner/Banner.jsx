import React from 'react'
import banner from '../../assets/banner.png'
import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='py-[260px]'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="left">
                        <h1 className='text-[48px] font-rale text-[#261134] w-[516px] '>A trusted provider of <span className='font-bold'>courier services.</span></h1>
                        <p className='text-[#4D4D4D] pt-[16px] w-[316px]'>We deliver your products safely to your home in a reasonable time.</p>

                        <div className="btn flex items-center gap-2 py-[12px] px-[20px] bg-[#F95C19] w-[145px] mt-[41px] rounded">
                            <a href="#" className='text-white'>Get started </a>
                            <FaArrowRight className='text-white' />
                        </div>
                    </div>

                    <div className="right">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner