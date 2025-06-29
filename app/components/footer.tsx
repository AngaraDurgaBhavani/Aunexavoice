
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
    return (

        <footer className="g-[#f6edf7]  bg-gradient-to-l from-purple-200 via-pink-200">
            <hr className="border-t border-gray-100 mx-24" />
            <div className="max-w-full flex  items-center justify-between xl:max-w-7xl xl:mx-auto  px-[8%] translate-y-3 pt-5 pb-5">
                <span className="flex"><img src="voice.jpg" height={20} width={25} /><span className="font-mono ml-2">AUNEXA.AI</span></span>
                <div className=""> <p className="text-[17px] text-gray-500 underline">Terms & Conditions</p></div>
            </div>

            <div className="flex justify-center -translate-y-7 space-x-2">
                <TbBrandLinkedinFilled className="h-6 w-6" />
                <FaTwitter className="h-6 w-6" />
            </div>

        </footer>
    )
}

