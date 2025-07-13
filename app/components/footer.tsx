
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
    return (

        <footer className="shrink-1">
            <hr className="border-t border-gray-100 mx-24" />
            <div className="max-w-full flex  items-center justify-between xl:max-w-7xl xl:mx-auto  px-[8%] translate-y-3 pt-2 pb-2">
                <span className="flex"><img src="voice.jpg" height={20} width={25} /><span className="font-mono ml-2 md:text-xl">AUNEXA.AI</span></span>
                <div> <p className="text-[17px] text-gray-500 underline md:text-xl cursor-pointer">Terms & Conditions</p></div>
            </div>

            <div className="flex justify-center -translate-y-5 space-x-2">
                <TbBrandLinkedinFilled className="h-6 w-6 md:h-8 md:w-8" />
                <FaTwitter className="h-6 w-6 md:h-8 md:w-8" />
            </div>

        </footer>
    )
}

