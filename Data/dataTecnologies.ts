
export interface SeedTecnologies {
    image: string;
    title: string;
}

export interface SeedProyecs {
    image: string;
    title: string;
    github: string;
    link: string;
    background?: boolean;
}


export interface SeedData {
    TecnologiesData?: SeedTecnologies[],
    ProyectsData?: SeedProyecs[],
}

export const data: SeedData = {
    TecnologiesData: [
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661363451/porfolio/descarga_9_tve4cl.png',
            title: "HTML",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661363445/porfolio/descarga_yze8hc.jpg',
            title: "CSS",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650143408/porfolio/descarga_2_bekay6.png',
            title: "JavaScript",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650148926/porfolio/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731_1_ctuecs.jpg',
            title: "Node.js",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1662491033/porfolio/React-icon.svg_icbgya.png',
            title: "React",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650145847/porfolio/typescript-2_bwx3ad.svg',
            title: "TypeScript",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650143428/porfolio/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431_zkhj8b.jpg',
            title: "MongoDB",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661363013/porfolio/descarga_qst80j.png',
            title: "Next.js",
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661363018/porfolio/descarga_7_vpzpkh.png',
            title: "Material UI",
        },   
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650217713/porfolio/descarga_4_b3xtk7.png',
            title: "Firebase",
        }, 
    ],

     ProyectsData: [
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661441893/porfolio/Captura_de_pantalla_2022-08-25_095916_f7uj0d.png',
            title: 'Mubi Shop Clone',
            github: 'https://github.com/anonimoxdver/Mubi-Shop-Clone',
            link: 'https://mubi-shop-da.netlify.app',
            background: true
        },
       
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661441902/porfolio/Captura_de_pantalla_2022-08-25_095620_edeyu8.png',
            title: 'Weather App',
            github: 'https://github.com/anonimoxdver/weather-app-David-DA',
            link: 'https://weather-app-david-da.netlify.app'
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1662418531/porfolio/Captura_de_pantalla_4_syiuub.png',
            title: 'Login con Firebase',
            github: 'https://github.com/anonimoxdver/login-with-firebase',
            link: 'https://login-firebase-redux-da.netlify.app/',
            background: true
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1662418524/porfolio/Captura_de_pantalla_6_bzplee.png',
            title: 'Antiguo porfolio',
            github: 'https://github.com/anonimoxdver/Portafolio-da',
            link: 'https://daviddaporfolio.netlify.app'
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650234997/porfolio/Captura_de_pantalla_2022-04-17_173209_zi7ilx.png',
            title: 'Mubi Clone',
            github: 'https://github.com/anonimoxdver/MubiClone',
            link: 'https://mubiclone-da.netlify.app',
            background: true
        },
        {
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650235022/porfolio/Captura_de_pantalla_2022-04-17_173538_ppbrox.png',
            title: 'React Mapbox',
            github: 'https://github.com/anonimoxdver/react-mapbox-DA',
            link: 'https://maps-app-da.netlify.app',

        },
     ]
}


