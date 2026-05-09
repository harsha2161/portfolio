import { workData } from "@/assets/assets";
import { FaLocationArrow } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Blogs({ isDarkMode }: any) {
    return (
        <div id="blogs" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-20 scroll-mt-15">

            <h2 className="text-center text-5xl font-bold">My latest Blogs</h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5">

            </div>

            <a href="#blogs" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 
            px-10 mx-auto hover:bg-lightHover dark:text-white dark:border-white dark:hover:bg-darkHover">Show more {isDarkMode ? <FaLocationArrow /> : <FaLocationArrow />} </a>
        </div>
    )
}