import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer({ isDarkMode }: any) {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="mt-20">
            {/* Scroll to Top Floating Button */}
            <a
                href="#top"
                className={`fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 hover:-translate-y-2 transition-all duration-300 z-50 dark:bg-gray-600 dark:hover:bg-gray-500 ${isScroll ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
                aria-label="Scroll to top"
            >
                <FaArrowUp className="text-xl" />
            </a>

            <div className="text-center sm:flex items-center justify-between 
            border-t border-gray-400 mx-[5%] sm:mx-[10%] lg:mx-[12%] mt-12 py-6">

                <p>©️ 2026 Harsha. All right reserved.</p>

                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">

                    <li><a target="_blank" href="https://github.com/harsha2161">Github</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/hrha/">Linkden</a></li>
                </ul>
            </div>
        </div>
    )
}