import user_image from './user-image.png';
import profile_img from './profile-img.png';
import header_bg_color from './header-bg-color.png';


export const assets = {
    user_image,
    profile_img,
    header_bg_color,
};

export const workData = [
    {
        title: 'Gift Lovers E-commerce websites',
        description: 'MERN staks',
        bgImage: '/work-1.png',
    },
   
    {
        title: 'Hrsh OS',
        description: 'Assemble Language',
        bgImage: '/work-3.png',
    },
    {
        title: 'My Portfolio',
        description: 'NEXT JS',
        bgImage: '/work-4.png',
    },
]

import { FaCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { SiFirebase, SiFigma, SiGit, SiMongodb } from 'react-icons/si';
import { FiMonitor, FiSmartphone, FiLayout, FiPenTool } from 'react-icons/fi';

export const serviceData = [
    { icon: FiMonitor, title: 'Full staks Developmrt', description: 'Web development is the process of building, programming...', link: '' },
    { icon: FiSmartphone, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: FiLayout, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: FiPenTool, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: FaCode, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js,OOP' },
    { icon: FaGraduationCap, title: 'Education', description: 'Bsc Hons Software Engineering university of kelaniya' },
    { icon: FaProjectDiagram, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    VscVscode, SiFirebase, SiMongodb, SiFigma, SiGit
];