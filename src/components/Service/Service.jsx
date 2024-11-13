import React from 'react'
import icon from '../../assets/icon.png'

const Service = () => {
    return (
        <div className='pb-[173px]'>
            <div className="container">
                <div className="text-center">
                    <h1 className='font-oxi text-[31px] font-bold text-[#F95C19]'>SERVICES</h1>
                    <p className=' text-[#261134] font-bold font-rale text-[40px] pb-[86px] '>Our services for you</p>
                </div>

                <div className="flex justify-between gap-x-[24px]">
                    <div className="service1 py-[46px] px-[61px] bg-[#fff] w-[424px] rounded text-center  ">
                        <img src={icon} alt="" className='mx-auto' />
                        <h2 className='text-[#464558] font-rale font-bold text-[25px] pt-[29px] '>Business Services</h2>
                        <p className='text-left pt-[32px] text-[#7B7A8B] font-rale '>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>

                        <ul className='list-disc marker:text-[#F95C19] text-left text-[#7B7A8B] pt-[36px] '>
                            <li>Corporate goods</li>
                            <li>Shipment</li>
                            <li>Accesories</li>
                        </ul>

                        <div className="btn bg-transparent border-2 border-[#F95C19] py-[12px] px-[80px] cursor-pointer hover:bg-[#F95C19] hover:text-[#fff] font-bold text-[#F95C19] mt-[60px] rounded"><a href="#" className='text-[20px]  font-oxi '>Learn more</a></div>
                    </div>

                    <div className="service1 py-[46px] px-[61px] bg-[#fff] w-[424px] rounded text-center  ">
                        <img src={icon} alt="" className='mx-auto' />
                        <h2 className='text-[#464558] font-rale font-bold text-[25px] pt-[29px] '>Statewide Services</h2>
                        <p className='text-left pt-[32px] text-[#7B7A8B] font-rale '>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>

                        <ul className='list-disc marker:text-[#F95C19] text-left text-[#7B7A8B] pt-[36px] '>
                            <li>Personal items</li>
                            <li>Percels</li>
                            <li>Documents</li>
                        </ul>

                        <div className="btn bg-transparent border-2 border-[#F95C19] py-[12px] px-[80px] cursor-pointer hover:bg-[#F95C19] hover:text-[#fff] font-bold text-[#F95C19] mt-[60px] rounded"><a href="#" className='text-[20px]  font-oxi '>Learn more</a></div>
                    </div>

                    <div className="service1 py-[46px] px-[61px] bg-[#fff] w-[424px] rounded text-center  ">
                        <img src={icon} alt="" className='mx-auto' />
                        <h2 className='text-[#464558] font-rale font-bold text-[25px] pt-[29px] '>Personal Services</h2>
                        <p className='text-left pt-[32px] text-[#7B7A8B] font-rale '>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>

                        <ul className='list-disc marker:text-[#F95C19] text-left text-[#7B7A8B] pt-[36px] '>
                            <li>Gifts</li>
                            <li>Package</li>
                            <li>Documents</li>
                        </ul>

                        <div className="btn bg-transparent border-2 border-[#F95C19] py-[12px] px-[80px] cursor-pointer hover:bg-[#F95C19] hover:text-[#fff] font-bold text-[#F95C19] mt-[60px] rounded w-[300px]"><a href="#" className='text-[20px]  font-oxi '>Learn more</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service