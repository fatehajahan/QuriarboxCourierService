import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import profilePic from '../../assets/profile.png'


const Testimonial = () => {
    return (
        <div>
            <div className="container">
                <div className="py-[149px]">
                    <div className='flex justify-center items-center'>
                        <div className="flex items-center">
                            <FaQuoteLeft className='text-[133px] text-[rgb(255,175,15,0.5)]  ' />
                            <div className='pl-[30px] text-center' >
                                <h3 className='font-oxi font-bold text-[31px] text-[#F95C19] '>TESTIMONIAL</h3>
                                <h2 className='font-rale font-extrabold text-[30px] text-[#261134] '>Our Awesome Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-[39px] px-[28px] mt-[89px] rounded-md w-[872px] mx-auto">
                        <h2 className='text-[25px] font-bold font-rale text-[#F95C19] '>Fantastic service!</h2>
                        <p className='text-[rgb(0,0,0,0.5)] w-[799px] pt-[11px]'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>

                        <div className="flex justify-between items-center pt-[15px]">
                            <div className="flex text-[#F95C19] gap-x-[7px] text-[19px] ">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <div className="flex items-center ">
                                <p className='text-right text-[#000000] font-bold font-rale text-[16px] '>Yves Tanguy
                                    <span className='block text-[rgb(0,0,0,0.7)] font-normal '>Chief Executive, DLF</span></p>
                                <img src={profilePic} alt="" className='pl-[13px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial