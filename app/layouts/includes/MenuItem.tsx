"use client"

import { MenuItemsTypes } from "@/app/types"
import { AiOutlineHome } from "react-icons/ai"
import { BsCameraVideo } from "react-icons/bs"
import { RiGroupLine } from "react-icons/ri"
// import { MdGroup } from 'react-icons/md';
// import { RiGroupLine } from 'react-icons/ri';


export default function MenuItem({ iconString, colorString, sizeString }: MenuItemsTypes) {

    const icons = () => {
        if (iconString == 'สำหรับคุณ') return <AiOutlineHome size={sizeString} color={colorString}/>
        if (iconString == 'ติดตาม') return <RiGroupLine size={sizeString} color={colorString}/>
        if (iconString == 'ไลฟ์สด') return <BsCameraVideo size={sizeString} color={colorString}/>
    }
    return (
        <>
            <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
                <div className="flex items-center lg:mx-0 mx-auto">

                    {icons()}

                    <p className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorString}]`}>
                        {iconString}
                    </p>
                </div>
            </div>
        </>
    )
}