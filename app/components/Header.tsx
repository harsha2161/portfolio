import {assets} from '@assets/assets'
import Image from "next/image";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Header({ isDarkMode }: any){
    return(
        <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt="" className='rounded-full w-38 h-50  object-cover'/>
            </div>

          
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-poppins font-extrabold '>
            Full Stack Developer Base In Srikanka.</h1>

            <p className='max-w-2xl mx-auto'>A current software engineering undergraduate at the 
            University of Kelaniya, with academic training in software development.</p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contect" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
                contact me<FiArrowRight className="text-lg" /></a>

                <a href="/harsha_cv.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black'>
                my resume<FiDownload className="text-lg" /></a>
            </div>
            
        </div>
    )
}