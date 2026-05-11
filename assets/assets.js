import user_image from './user-image.png';
import profile_img from './profile-img.png';
import header_bg_color from './header-bg-color.png';
import { FaCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { SiMongodb, SiKubernetes } from 'react-icons/si';
import { FiFigma} from 'react-icons/fi';


export const assets = {
    user_image,
    profile_img,
    header_bg_color,
};

export const workData = [
    {
        title: 'Gift Lovers E-commerce websites',
        description: 'MERN staks',
        bgImage: '/gift_lovers.png',
        link : 'https://github.com/harsha2161/Gift_Lovers_E-commerce-platform',
    },
   
    {
        title: 'Hrsh OS',
        description: 'Assemble Language',
        bgImage: '/os.png',
        link : 'https://github.com/harsha2161/hrshOS',
    },
    {
        title: 'My Portfolio',
        description: 'NEXT JS',
        bgImage: '/portfolio.png',
        link : 'https://github.com/harsha2161/portfolio',
    },
     {
        title: '3D-ArtGallery',
        description: 'HTML , JS',
        bgImage: '/3D_art.png',
        link : 'https://3-d-art-gallery-one.vercel.app/',
    },
]


export const infoList = [

    { icon: FaCode, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js,OOP' ,link : "" },
    { icon: FaGraduationCap, title: 'Education', description: 'Software Engineering university of kelaniya', link : "#education" },
    { icon: FaProjectDiagram, title: 'Projects', description: 'Built more than 5 projects' , link : "#projucts" }
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