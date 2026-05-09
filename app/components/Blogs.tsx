import { workData } from "@/assets/assets";
import { FaLocationArrow } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Blogs({ isDarkMode }: any){
    return(
        <div id="blogs" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-20 scroll-mt-15">
            
            <h2 className="text-center text-5xl font-bold">My latest work</h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5">
                {workData.map((project, index)=>(
                <a href={project.link} key={index}>
                    <div className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border-2" key={index} style={{backgroundImage : `url(${project.bgImage})`}}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
                            <div>
                                <h2 className="font-semibold text-black">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>

                            <div className="border rounded-full border-black w-9 aspect-square flex items-center 
                            justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-300 transition">
                                <FiSend className="text-xl text-black" />
                            </div>
                        </div>   
                </div>
                </a>
                
                ))}
            </div>
                
            <a href="#projucts" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 
            px-10 mx-auto hover:bg-lightHover dark:text-white dark:border-white dark:hover:bg-darkHover">Show more {isDarkMode ? <FaLocationArrow />: <FaLocationArrow/>} </a>
        </div>
    )
}