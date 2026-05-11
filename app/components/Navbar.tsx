import Image from 'next/image'
import { assets } from '@assets/assets'
import { useEffect, useRef, useState } from 'react'
import { PiSunDimFill } from "react-icons/pi";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";


export default function Navbar({ isDarkMode, setDarkMode }: any) {

    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const sideMenuRef = useRef<any>(null);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)'
        setIsMenuOpen(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })

    }, [])

    return (

        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />

            </div>

            <nav className={`w-full fixed top-0 px-4 py-4 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300
             ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/50 dark:shadow-white/20" : " "}`} >

                <a href="#top"><h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600
             tracking-tighter select-none cursor-pointer">Harsha</h1></a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
             ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>

                    <li><a className='font-bold' href="#top">Home</a></li>
                    <li><a className='font-bold' href="#about">About</a></li>
                    <li><a className='font-bold' href="#skill">Skills</a></li>
                    <li><a className='font-bold' href="#education">Education</a></li>
                    <li><a className='font-bold' href="#projucts">Projects</a></li>
                    <li><a className='font-bold' href="#blogs">Blogs</a></li>
                    <li><a className='font-bold' href="#contect">Contect</a></li>

                </ul>

                <div className='flex items-center gap-4'>

                    <button onClick={() => setDarkMode((prev: any) => !prev)} suppressHydrationWarning>
                        {isDarkMode ? <IoMdMoon className='text-3xl transition-transform duration-300 hover:scale-110' /> : 
                        <PiSunDimFill className='text-3xl transition-transform duration-300 hover:scale-110' />}
                    </button>

                    <a href="#contect" className='hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact
                        {isDarkMode ? <MdOutlineArrowForwardIos /> : <MdOutlineArrowForwardIos />}</a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <FiMenu className='text-2xl text-black dark:text-white transition-transform duration-300 hover:scale-110' />
                    </button>
                </div>


              
                <div onClick={closeMenu} className={`fixed top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm z-40 md:hidden 
                transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}/>

              
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50
                h-screen bg-rose-50 dark:bg-darkHover dark:text-white transition duration-500 rounded-l-2xl border-l-2 backdrop-opacity-50'>

                    <div className='absolute right-6 top-6 flex items-center gap-4'>
                        <button onClick={() => setDarkMode((prev: any) => !prev)} suppressHydrationWarning className='transition-transform duration-300 hover:scale-110'>
                            {isDarkMode ? <IoMdMoon className='text-3xl' /> : <PiSunDimFill className='text-3xl' />}
                        </button>

                        <button onClick={closeMenu} className='transition-transform duration-300 hover:rotate-90 hover:scale-110'>
                            <FiX className='cursor-pointer text-3xl text-black dark:text-white' />
                        </button>
                    </div>
                    <div className='flex flex-col gap-6 '>
                        <li><a className='font-bold block py-2 px-4 rounded-xl hover:bg-rose-100 dark:hover:bg-white/10 transition-all
                     duration-300 hover:translate-x-2 hover:shadow-sm text-xl' onClick={closeMenu} href="#top">Home</a></li>
                        <li><a className='font-bold block py-2 px-4 rounded-xl hover:bg-rose-100 dark:hover:bg-white/10 transition-all
                     duration-300 hover:translate-x-2 hover:shadow-sm text-xl' onClick={closeMenu} href="#about">About Me</a></li>
                        <li><a className='font-bold block py-2 px-4 rounded-xl hover:bg-rose-100 dark:hover:bg-white/10 transition-all
                     duration-300 hover:translate-x-2 hover:shadow-sm text-xl' onClick={closeMenu} href="#skill">Skills</a></li>
                        <li><a className='font-bold block py-2 px-4 rounded-xl hover:bg-rose-100 dark:hover:bg-white/10 transition-all
                     duration-300 hover:translate-x-2 hover:shadow-sm text-xl' onClick={closeMenu} href="#education">Education</a></li>
                        <li><a className='font-bold block py-2 px-4 rounded-xl hover:bg-rose-100 dark:hover:bg-white/10 transition-all
                     duration-300 hover:translate-x-2 hover:shadow-sm text-xl' onClick={closeMenu} href="#projucts">Projects</a></li>
                        <li><a className='font-bold block py-2 px-4 rounded-xl hover:bg-rose-100 dark:hover:bg-white/10 transition-all
                     duration-300 hover:translate-x-2 hover:shadow-sm text-xl' onClick={closeMenu} href="#blogs">Blogs</a></li>
                        <li><a className='font-bold block py-2 px-4 rounded-xl hover:bg-rose-100 dark:hover:bg-white/10 transition-all
                     duration-300 hover:translate-x-2 hover:shadow-sm text-xl' onClick={closeMenu} href="#contect">Contact Me</a></li>
                    </div>

                </ul>

            </nav>
        </>
    )
}
