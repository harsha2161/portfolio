
import { FaArrowUp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer({ isDarkMode }: any){
    return(
        <div className="mt-20">
            <div className="text-center">
                <a href="#top"><h1 className="text-4xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-600 to-green-600 tracking-tighter select-none cursor-pointer">Harsha</h1></a>               
                
                <div className="w-max flex items-center gap-2 mx-auto">
                    <FiMail className="text-xl"/>
                    prabhathharsha77@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between 
            border-t border-gray-400 mx-[5%] sm:mx-[10%] lg:mx-[12%] mt-12 py-6">

                <p>©️ 2026 Harsha. All right reserved.</p>

                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">  
                    <p>0765737107</p>
                    <li><a target="_blank" href="https://github.com/harsha2161">Github</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/hrha/">Linkden</a></li>  
                </ul>
            </div>
        </div>
    )
}