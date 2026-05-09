import {assets, infoList, toolsData} from '@assets/assets'

import Image from "next/image";

export default function About({ isDarkMode }: any){
    return(
        <div id="about" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-1">
           
            <h2 className="text-center mt-5 text-5xl font-bold">About Me</h2>
        
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>A current software engineering undergraduate at the University of Kelaniya, with academic training in software development.
                    Proficient in MERN stack, object-oriented programming and smart contract development with a focus on leveraging these technologies to solve problems. Dedicated to learning, growth, and fostering collaboration in dynamic environments. Eager to apply technical knowledge to create innovative solutions.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                        {infoList.map(({icon: Icon, title , description }, index)=>(
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                            hover:bg-gray-300 hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Icon className='text-3xl mt-3 text-black dark:text-white' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </li>

                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 dark:text-white/80'>Tools</h4>

                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map( (ToolIcon, index)=>(
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
                            cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white'>
                                <ToolIcon className='text-2xl text-black dark:text-white' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
           
        </div>
    ) 
}