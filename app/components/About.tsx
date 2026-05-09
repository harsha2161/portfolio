import {assets, infoList, toolsData} from '@assets/assets'
import Image from "next/image";

export default function About({ isDarkMode }: any){
    return(
        <div id="about" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-10">
           
            <h2 className="text-center mt-5 text-5xl font-bold">About Me</h2>
        
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
                
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl text-left'>Hello! I’m Harsha, currently a 3rd-year Software Engineering undergraduate at the University of Kelaniya.
                     My studies have given me a strong foundation in software development principles and a keen interest in building technology that makes an impact. <br /><br />
                    As a Full Stack Developer, I enjoy working across both frontend and backend development. This passion enables me to design seamless, 
                    interactive user interfaces while also creating efficient and scalable server-side systems that power modern web applications. <br /><br />
                    When I'm not coding, you can find me participating in hackathons. Also I am volunteering as a designer for several university clubs. 
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                        {infoList.map(({icon: Icon, title , description , link }, index)=>(
                            <a href={link}  key={index}>
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                                hover:bg-gray-300 hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Icon className='text-3xl mt-3 text-black dark:text-white' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </li>
                            </a>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    ) 
}