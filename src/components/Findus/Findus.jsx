import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { RxEnvelopeOpen } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";




const Findus = () => {
    return (
        <div>
            <div className="container">
                <div className='py-[169px]'>
                    <div className=' text-center' >
                        <h3 className='font-oxi font-bold text-[31px] text-[#F95C19] '>TESTIMONIAL</h3>
                        <h2 className='font-rale font-extrabold text-[30px] text-[#261134] '>Our Awesome Clients</h2>
                    </div>
                    <div className="flex pt-[85px] gap-x-5 ">
                        <div className='w-[80%]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06397445584!2d90.254873766693!3d23.780753027627565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1731478729133!5m2!1sen!2sbd"
                                className="w-full h-full border-0 rounded-lg"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className=' w-[60%] bg-white py-[84px] px-[105px]'>
                            <h2 className='font-rale font-bold text-[20px] text-[#464558]'>Contact with us</h2>
                            <ul className='font-rale text-[22px] text-[#302E2E] '>
                                <div className="flex items-center pt-[19px]">
                                    <FaLocationDot className='mr-[15px] text-[#FFAF0F] text-[30px] ' />
                                    <li className='flex items-center text-[rgb(48,46,46,0.7)]'> 2277 Lorem Ave, San Diego, CA 22553</li>
                                </div>


                                <div className="flex items-center pt-[19px]">
                                    <FaRegClock className='mr-[15px] text-[#FFAF0F] text-[30px] ' />
                                    <li className='flex items-center text-[rgb(48,46,46,0.7)]'> Monday - Friday: 10 am - 10pm
                                        Sunday: 11 am - 9pm</li>
                                </div>


                                <div className="flex items-center pt-[19px]">
                                    <RxEnvelopeOpen className='mr-[15px] text-[#FFAF0F] text-[30px] ' />
                                    <li className='flex items-center text-[rgb(48,46,46,0.7)]'> info@quriarbox.com</li>
                                </div>

                            </ul>

                            <div className="icons flex gap-x-[24px] mt-[51px]">
                                <a href="#"><FaFacebookSquare className='text-[30px] text-[#EBEBF5] hover:text-[#F95C19] transition duration-300' /></a>
                                <a href="#"><RiInstagramFill className='text-[30px] text-[#EBEBF5] hover:text-[#F95C19] transition duration-300' /></a>
                                <a href="#"><FaTwitterSquare className='text-[30px] text-[#EBEBF5] hover:text-[#F95C19] transition duration-300' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="callBtn ">
                        <a href="#" className='flex items-center justify-center py-[22px] px-[113px] bg-[#F95C19] w-[560px] mx-auto mt-[30px] text-white text-[20px] font-oxi font-bold gap-x-[13px] rounded-md hover:bg-white hover:text-[#F95C19] transition duration-300'>
                            <IoMdCall className='text-[30px]' />
                            Call us to delivery  123-456789
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Findus