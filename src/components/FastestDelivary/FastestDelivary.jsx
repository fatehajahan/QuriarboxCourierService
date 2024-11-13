import React from 'react'
import { FaPlayCircle } from "react-icons/fa";


const FastestDelivary = () => {
    return (
        <div>
            <div className="container">
                <div className="bg-fast bg-no-repeat bg-cover bg-center py-[147px] rounded-[16px] ">
                    <FaPlayCircle className='text-[#F95C19] bg-white rounded-full border-[#F95C19] mx-auto text-[86px]' />
                    <div className="text-center">
                        <h2 className='text-[31px] font-oxi font-bold text-[#F95C19] pt-[19px] '>FASTEST DELIVERY</h2>
                        <p className='font-rale text-[25px] text-white w-[673px] mx-auto '> You can get your valuable item in the fastest period of time with safety. Because your emergency is our first priority.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FastestDelivary