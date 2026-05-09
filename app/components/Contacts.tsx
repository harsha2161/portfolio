import React from "react";
import { FiArrowRight, FiMail, FiPhone, FiGithub } from "react-icons/fi";


export default function Contacts({ isDarkMode }: any) {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ba934708-d279-4fc1-9223-079ba39c205a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {

            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {

            console.log("Error", data);
            setResult(data.message);
        }
    }


    return (
        <div id="contect" className='w-full px-[5%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-10 
        bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

            <h2 className="text-center text-5xl font-bold">Get in touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">We would love to hear from you.
                Please use the form below for any questions, comments, or feedback.</p>

            <div className="flex flex-col md:flex-row gap-12 mt-10 max-w-5xl mx-auto items-start">


                <div className="flex-1 flex flex-col gap-8 w-full mt-4 md:mt-8">
                    <div className="flex items-center gap-6 group">
                        <div className="bg-gray-200 dark:bg-darkHover/50 p-4 rounded-xl text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white shadow-sm transition-transform hover:scale-105 duration-300">
                            <FiMail className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold dark:text-white">Email</h3>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prabhathharsha77@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">prabhathharsha77@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                        <div className="bg-gray-200 dark:bg-darkHover/50 p-4 rounded-xl text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white shadow-sm transition-transform hover:scale-105 duration-300">
                            <FiPhone className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold dark:text-white">Phone</h3>
                            <a href="tel:+94771234567" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">+94 77 123 4567</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                        <div className="bg-gray-200 dark:bg-darkHover/50 p-4 rounded-xl text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white shadow-sm transition-transform hover:scale-105 duration-300">
                            <FiGithub className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold dark:text-white">GitHub</h3>
                            <a href="https://github.com/harsha2161" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">github.com/harsha2161</a>
                        </div>
                    </div>
                </div>


                <div className="flex-2 w-full -mt-2 md:-mt-6">
                    <form className="w-full bg-white/50 dark:bg-darkTheme/50 p-8 pb-0 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 backdrop-blur-sm" onSubmit={onSubmit}>
                        <div className="grid grid-cols gap-6 mb-2">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="text" placeholder="Enter Your Name" required
                                    className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
                                rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" name="name" />

                                <input type="text" placeholder="Enter Your Email" required
                                    className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 
                                rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" name="email" />
                            </div>

                            <textarea rows={6} placeholder="Enter your message" required
                                className="w-full p-4 outline-none border-[0.5px] border-gray-400
                            rounded-md bg-white mb-2 dark:bg-darkHover/30 dark:border-white/90" name="message"></textarea>

                            <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 
                            bg-black/80 text-white rounded-full hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover">
                                Submit now <FiArrowRight className="text-xl" /> </button>

                            <p className="mt-4 font-bold text-green-600">{result}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}