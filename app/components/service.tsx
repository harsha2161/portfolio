import { serviceData } from "@/assets/assets";
import { FiArrowRight } from "react-icons/fi";

export default function Service({ isDarkMode }: any){
    return(
        <div id="service" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-bold">My services</h2>  

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">A current software engineering undergraduate at the University of Kelaniya, with academic training in software development.
            Proficient in MERN stack, object-oriented programming</p>   

<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">                
                {serviceData.map(({icon: Icon, title, description, link}, index) => (
                  
                  <div key={index} className="border border-gray-400 rounded-lg px-8 py-12
                    hover:shadow-2xl cursor-pointer hover:bg-gray-300 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <Icon className="text-3xl text-black dark:text-white" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                        <p className="text-sm text-gray-900 leading-5 dark:text-white/80">{description}</p>
                        <a href={link} className="flex items-center gap-2 text-sm mt-5">Read more 
                        <FiArrowRight className="w-4 h-4 text-black dark:text-white" /> </a>

                    </div>
                ))}
            </div>

        </div>
    )
}