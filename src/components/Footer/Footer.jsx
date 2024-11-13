import React from 'react'
import logo from '../../assets/logoFooter.png'

const Footer = () => {
    return (
        <div>
            <div className="bg-[#222132]">
                <div className="container">
                    <div className="upPart  py-[84px] text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className='font-rale font-extrabold text-[39px]'>Get an update every week</h2>
                                <p className='font-rale font-medium text-[16px] text-[#D2C6C6] w-[501px] pt-[11px]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                            </div>

                            <div>
                                <h2 className='font-oxi font-bold text-[18px] text-[#F95C19] pb-[13px]'>SUBSCRIBE TO NEWSLETTER</h2>
                                <div className="flex gap-x-[16px]">
                                    <input type="email" placeholder='Enter your mail' className=' py-[15px] pl-[18px] border border-[#C5C5D2] bg-transparent w-[386px] rounded-md ' />
                                    <a href="#" className=' py-[14px] px-[20px] bg-[#F95C19] rounded-md text-white hover:bg-white hover:text-black transition duration-300'>Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#2F2E41] py-[56px]">
                <div className="container">
                    <div className="mdPart">
                        <div className="flex justify-between">
                            <div className="w-[20%]">
                                <img src={logo} alt="" />
                                <p className='font-rale font-semibold text-[16px] text-[#9291A1]  w-[190px] pt-[12px]'>The most trusted Courier
                                    company in your area.
                                </p>
                            </div>

                            <div className="w-[50%] flex justify-between text-white">
                                <ul>
                                    <li className='font-oxi font-bold text-[20px]'>Other links</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[22px]'>Blogs</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[7px]'>Movers website</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[7px]'>Traffic Update</li>
                                </ul>

                                <ul>
                                    <li className='font-oxi font-bold text-[20px]'>Services</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[22px]'>Corporate goods</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[7px]'>Artworks</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[7px]'>Documents</li>
                                </ul>

                                <ul>
                                    <li className='font-oxi font-bold text-[20px]'>Customer Care</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[22px]'>About Us</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[7px]'>Contact US</li>
                                    <li className='font-rale font-medium text-[16px] text-[#A1A1A1] pt-[7px]'>Get Update</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#222132]">
                <div className="container">
                    <div className="flex justify-between text-white py-[30px]">
                        <h6 className='font-rale font-medium text-[13px] text-[#DBDBE9]'>All rights Reserved © Your Company, 2021</h6>
                        <h5 className='font-rale font-normal text-[12px]'>Made with heart by <span className='text-[#F95C19]'>ThemeWagon</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer