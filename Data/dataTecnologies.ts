
export interface SeedTecnologies {
    image: string;
    title: string;
}

export interface SeedProyecs {
    firstImage: string;
    secondImage: string;
    pahtName: string;
    description: string;
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
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663381511/porfolio/logo-hexagon-card_r3bgaj.png',
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
            image: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663381625/porfolio/MongoDB-Emblem_gzad6d.jpg',
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
            firstImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661441893/porfolio/Captura_de_pantalla_2022-08-25_095916_f7uj0d.png',
            secondImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663001737/porfolio/Captura_de_pantalla_2022-09-12_111205_snsvom.png',
            pahtName: 'articulos-oficiales',
            description: 'Clon de tienda oficial de mubi donde puedes encontrar artículos oficiales de mubi.',
            title: 'Artículos oficiales',
            github: 'https://github.com/anonimoxdver/Mubi-Shop-Clone',
            link: 'https://mubi-shop-da.netlify.app',
            background: true
        },
       
        {
            firstImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1661441902/porfolio/Captura_de_pantalla_2022-08-25_095620_edeyu8.png',
            secondImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663001636/porfolio/Captura_de_pantalla_2022-09-12_111628_hygayo.png',
            pahtName: 'weather-app',
            description: 'Proyecto por parte de la hackathon de midudev en la que se hace uso de RapidApi para ver el clima actual en cualquier parte del mundo.',
            title: 'Weather App',
            github: 'https://github.com/anonimoxdver/weather-app-David-DA',
            link: 'https://weather-app-david-da.netlify.app'
        },
        {
            firstImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663001491/porfolio/Captura_de_pantalla_2022-09-12_115021_y7dpu7.png',
            secondImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663001499/porfolio/Captura_de_pantalla_2022-09-12_114935_fsxi8d.png',
            pahtName: 'login-con-firebase',
            description: 'Login con Firebase en donde te puedes registrar con tu correo y contraseña o puedes registrarte por Google o por GitHub, este hecho con redux toolkit.',
            title: 'Login con Firebase',
            github: 'https://github.com/anonimoxdver/login-with-firebase',
            link: 'https://login-firebase-redux-da.netlify.app/',
            background: true
        },
        {
            firstImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1662418524/porfolio/Captura_de_pantalla_6_bzplee.png',
            secondImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663001643/porfolio/Captura_de_pantalla_2022-09-12_110803_lxezut.png',
            pahtName: 'antiguo-porfolio',
            description: 'Primera versión de mi porfolio personal en la que demuestro las tecnologías que sé y los proyectos que lleve a cabo.',
            title: 'Antiguo porfolio',
            github: 'https://github.com/anonimoxdver/Portafolio-da',
            link: 'https://daviddaporfolio.netlify.app'
        },
        {
            firstImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650234997/porfolio/Captura_de_pantalla_2022-04-17_173209_zi7ilx.png',
            secondImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663001604/porfolio/Captura_de_pantalla_2022-09-12_111757_yy9dhy.png',
            pahtName: 'mubi-clone',
            description: 'Clon de mi streaming favorito para ver películas de calidad.',
            title: 'Mubi Clone',
            github: 'https://github.com/anonimoxdver/MubiClone',
            link: 'https://mubiclone-da.netlify.app',
            background: true
        },
        {
            firstImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1650235022/porfolio/Captura_de_pantalla_2022-04-17_173538_ppbrox.png',
            secondImage: 'https://res.cloudinary.com/dsii7wbi4/image/upload/v1663001637/porfolio/Captura_de_pantalla_2022-09-12_111437_ul5asv.png',
            pahtName: 'react-mapbox',
            description: 'Mapa hecho con la API de Mapbox para ver tu localización, trazar una ruta y ver en donde exactamente donde te ubicas.',
            title: 'React Mapbox',
            github: 'https://github.com/anonimoxdver/react-mapbox-DA',
            link: 'https://maps-app-da.netlify.app',

        },
     ]
}


