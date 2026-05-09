;
import { DiMongodb, DiMysql } from "react-icons/di";
import { FaCss3Alt, FaFigma, FaHtml5, FaJava, FaJsSquare, FaPhp, FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";

export default function Skills({ isDarkMode }: any){
    return(
        <div id="skill" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-5">
            <h2 className="text-center text-5xl font-bold">My Skills</h2>  

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">Here are the technologies and tools I work with</p>   

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">                
              
                  
                <div className="border border-gray-400 rounded-lg px-4 py-6 h-auto w-[350px]
                hover:shadow-2xl cursor-pointer hover:bg-gray-300 dark:hover:bg-darkHover dark:hover:shadow-white">    
                <h1 className="mb-4 font-bold border-b-2">Frontend Developmets</h1>

                    <div className="flex flex-col-reverse">
                        <div className="flex flex-col items-center justify-center">
                            <FaHtml5 className="text-5xl"/> <p>HTML</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <FaCss3Alt  className="text-5xl"/> <p>CSS</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <RiTailwindCssFill className="text-5xl"/> <p>Tailwind CSS</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <FaReact className="text-5xl"/> <p>React</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <IoLogoJavascript  className="text-5xl"/> <p>Java Script</p>
                        </div>
                        
                       
                    </div>
               
                </div>
                 
                 <div className="border border-gray-400 rounded-lg px-4 py-6 h-auto w-[350px]
                hover:shadow-2xl cursor-pointer hover:bg-gray-300 dark:hover:bg-darkHover dark:hover:shadow-white">
                <h1 className="mb-4 font-bold border-b-2">Backend Developmets</h1>

                        <div className="flex flex-col items-center justify-center">
                        <FaJava  className="text-5xl"/> <p>Java</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                        <FaPhp  className="text-5xl"/> <p>PHP</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                        <SiSpring   className="text-5xl"/> <p>Spring Boot</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                        <FaJsSquare  className="text-5xl"/> <p>EXpress</p>
                        </div>




                </div>

                 <div className="border border-gray-400 rounded-lg px-4 py-6 h-auto w-[350px]
                hover:shadow-2xl cursor-pointer hover:bg-gray-300 dark:hover:bg-darkHover dark:hover:shadow-white">
                <h1 className="mb-4 font-bold border-b-2">Backend Developmets</h1>

                <div className="flex flex-col items-center justify-center">
                <DiMongodb   className="text-5xl"/> <p>MongoDB</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                <FaDocker   className="text-5xl"/> <p>Docker</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                <DiMysql   className="text-5xl"/> <p>My SQL</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                <FaFigma   className="text-5xl pt-2 pb-1"/> <p>Figma</p>
                </div>


                </div>
            
            </div>

        </div>
    )
}