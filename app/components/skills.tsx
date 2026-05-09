;
import { DiMongodb, DiMysql } from "react-icons/di";
import { FaCss3Alt, FaFigma, FaHtml5, FaJava, FaJsSquare, FaPhp, FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";

export default function Skills({ isDarkMode }: any){
    return(
        <div id="skill" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-30">
            <h2 className="text-center text-5xl font-bold pb-[30px]">My Skills</h2>  


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">                
              
                <div className="border border-gray-400 rounded-lg px-6 py-8 h-full w-full hover:shadow-2xl cursor-pointer 
                hover:-translate-y-2 transition-all duration-500 hover:bg-gray-300 dark:hover:bg-darkHover dark:hover:shadow-white">    
                    
                    <h1 className="mb-8 font-bold border-b-2 border-gray-400 pb-2 text-center text-xl">Frontend Development</h1>
                   
                    <div className="flex flex-wrap justify-center gap-8">

                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaHtml5 className="text-5xl text-orange-500"/> <p className="text-sm font-medium">HTML</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaCss3Alt  className="text-5xl text-blue-500"/> <p className="text-sm font-medium">CSS</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <RiTailwindCssFill className="text-5xl text-teal-400"/> <p className="text-sm font-medium">Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaReact className="text-5xl text-cyan-400"/> <p className="text-sm font-medium">React</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <IoLogoJavascript  className="text-5xl text-yellow-400"/> <p className="text-sm font-medium">JavaScript</p>
                        </div>
                    </div>
                </div>
                 
                
                <div className="border border-gray-400 rounded-lg px-6 py-8 h-full w-full
                hover:shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:bg-gray-300 dark:hover:bg-darkHover dark:hover:shadow-white">
                    
                    <h1 className="mb-8 font-bold border-b-2 border-gray-400 pb-2 text-center text-xl">Backend Development</h1>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaJava  className="text-5xl text-red-500"/> <p className="text-sm font-medium">Java</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaPhp  className="text-5xl text-indigo-400"/> <p className="text-sm font-medium">PHP</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <SiSpring   className="text-5xl text-green-500"/> <p className="text-sm font-medium">Spring Boot</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaJsSquare  className="text-5xl text-yellow-400"/> <p className="text-sm font-medium">Express</p>
                        </div>
                    </div>
                </div>

    
                <div className="border border-gray-400 rounded-lg px-6 py-8 h-full w-full
                hover:shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:bg-gray-300 dark:hover:bg-darkHover dark:hover:shadow-white">
                    
                    <h1 className="mb-8 font-bold border-b-2 border-gray-400 pb-2 text-center text-xl">Tools & Databases</h1>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <DiMongodb   className="text-5xl text-green-500"/> <p className="text-sm font-medium">MongoDB</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaDocker   className="text-5xl text-blue-500"/> <p className="text-sm font-medium">Docker</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <DiMysql   className="text-5xl text-blue-700"/> <p className="text-sm font-medium">MySQL</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaFigma   className="text-5xl text-pink-500"/> <p className="text-sm font-medium">Figma</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}