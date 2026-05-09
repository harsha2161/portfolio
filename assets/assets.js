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
import { SiMongodb, SiKubernetes } from 'react-icons/si';
import { FiFigma} from 'react-icons/fi';

export const infoList = [

    { icon: FaCode, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js,OOP' },
    { icon: FaGraduationCap, title: 'Education', description: 'Bsc Hons Software Engineering university of kelaniya' },
    { icon: FaProjectDiagram, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    {icon : VscVscode,
     name : "vs code"
    },
     {icon : FiFigma,
     name : "Figma UI/UX"
    },
     {icon : SiMongodb,
     name : "Mongo DB"
    },
     {icon : SiKubernetes,
     name : "Kuber -nets"
    },
     {icon : VscVscode,
     name : "vs code"
    }
     
];