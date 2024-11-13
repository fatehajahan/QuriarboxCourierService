import React from 'react'
import contact from '../../assets/contact.png'
import { IoIosSend } from "react-icons/io";


const Contact = () => {
  return (
    <div>
        <div className="container">
            <div className="flex justify-center items-center gap-x-[24px]">
                <div>
                    <img src={contact} alt="" />
                    <h3 className='font-oxi text-[24px] font-bold text-[#F95C19] pt-[13px] '>REQUEST A CALLBACK</h3>
                    <h2 className='pt-[20px] text-[#261134] font-extrabold text-[39px] w-[430px] leading-[39px] '>We will contact in the shortest time.</h2>
                    <p className='font-rale font-semibold text-[rgb(0,0,0,0.4)] text-[20px] pt-[9px] '>Monday to Friday, 9am-5pm.</p>
                </div>

                <div className="inputs block">
                    <input type="text" placeholder='Name' className='bg-transparent py-[15px] pl-[19px] border border-[#C5C5D2] rounded-md w-[423px] '  />
                    <input type="text" placeholder='Email' className='bg-transparent block mt-[16px] py-[15px] pl-[19px] border border-[#C5C5D2] rounded-md w-[423px] ' />
                    <input type="text" placeholder='Message' className='bg-transparent block mt-[16px] pt-[15px] pl-[19px] w-[423px] pb-[118px]  border border-[#C5C5D2] rounded-md overflow-auto ' />

                    <div className="btn "><a href="#" className='flex items-center text-center text-white gap-x-[5px] font-oxi font-bold text-[20px] bg-[#F95C19] py-[12px] px-[131px] w-[424px] rounded-md mt-[54px] hover:bg-white  hover:text-[#261134] transition duration-500 '>Send Message<IoIosSend /> </a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact