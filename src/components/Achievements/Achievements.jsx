import React from 'react'
import { CiTrophy } from "react-icons/ci";
import { FaRegMap } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { BsBagDash } from "react-icons/bs";


const Achievements = () => {
    return (
        <div className='pb-[162px]'>
            <div className="container">
                <div className="flex justify-between items-center">
                <div className="award text-center w-[260px]">
                    <CiTrophy className='text-[67px] font-extrabold text-[#222132] mx-auto' />
                    <h2 className='font-oxi font-extrabold text-[39px] text-[#F95C19] '>26+</h2>
                    <p className='font-rale text-[20px] text-[#4D4D4D] font-semibold '>Awards  won</p>
                </div>

                <div className="award text-center w-[260px]">
                    <FaRegMap className='text-[67px] font-extrabold text-[#222132] mx-auto' />
                    <h2 className='font-rale font-extrabold text-[39px] text-[#F95C19] '>65+</h2>
                    <p className='font-rale text-[20px] text-[#4D4D4D] font-semibold '>States covered</p>
                </div>

                <div className="award text-center w-[260px]">
                    <FaRegUser className='text-[67px] font-extrabold text-[#222132] mx-auto' />
                    <h2 className='font-rale font-extrabold text-[39px] text-[#F95C19] '>689K+</h2>
                    <p className='font-rale text-[20px] text-[#4D4D4D] font-semibold '>Happy clients</p>
                </div>

                <div className="award text-center w-[260px]">
                    <FaTruckLoading className='text-[67px] font-extrabold text-[#222132] mx-auto' />
                    <h2 className='font-rale font-extrabold text-[39px] text-[#F95C19] '>130M+</h2>
                    <p className='font-rale text-[20px] text-[#4D4D4D] font-semibold '>Goods delivered</p>
                </div>

                <div className="award text-center w-[260px]">
                    <BsBagDash className='text-[67px] font-extrabold text-[#222132] mx-auto' />
                    <h2 className='font-rale font-extrabold text-[39px] text-[#F95C19] '>130M+</h2>
                    <p className='font-rale text-[20px] text-[#4D4D4D] font-semibold '>Business hours</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements