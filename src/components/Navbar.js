import React, {useState} from 'react'
import Link from "next/link";
import Logo from "../components/Logo";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {
    
    MoonIcon,
    SunIcon,
    InstagramIcon,  
} from "../components/Icons";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";

const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}

            >&nbsp;
            </span>
        </Link>
    )
}

const CustomLinkMobile = ({href, title, className = "", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span
                className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}

            >&nbsp;
            </span>
        </button>
    )
}
const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className='w-full px-32 py-4 font-medium flex items-center justify-between dark:text-light relative z-30 lg:px-16 md:px-12 sm:px-8'>
            <button className={'flex-col justify-center items-center hidden lg:flex'} onClick={handleClick}>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className={'w-full flex justify-between items-center lg:hidden'}>
                <nav className={'flex gap-4'}>
                    <CustomLink href={'/'} title={'Home'}/>
                    <CustomLink href={"/about"} title={'Sobre mí'}/>
                        
                    {// <CustomLink href={"/projects"} title={'Projects'}/> 
                    }
                    <CustomLink href={"/obras"} title={'Obras'}/>
                    <CustomLink href={"/alumnos"} title={'Alumnos'}/>
                    <CustomLink href={"/talleres"} title={'Talleres'}/>
                    <CustomLink href={"/murales"} title={'Murales'}/>
                    
                </nav>
                <nav className={'flex justify-center items-center gap-4 flex-wrap'}>
                    {/*Para que se desployee de nuevo
                    <Link className={'w-9'} href={'/'} target={'_blank'}>
                        <LinkedInIcon/>
                    </Link>*/}
                    <CustomLink href={"https://drive.google.com/file/d/1ZEQDW8kfYdm1I77vv4KJY9fzltdb8Vwu/view?usp=drive_link"} title={'Escenografía'} target={'_blank'}/>
                    <Link className={'w-9'} href={'https://instagram.com/dianella.art/'} target={'_blank'}>
                        <InstagramIcon/>
                    </Link>
                    
                    <button onClick={() => setMode(mode === "light" ? 'dark' : 'light')}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                    >
                        {
                            mode === 'dark' ?
                                <SunIcon className={'fill-dark'}/> :
                                <MoonIcon className={'fill-dark'}/>
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{scale: 0, opacity: 0, x: '-50%', y: '-50%'}}
                        animate={{scale: 1, opacity: 1}}
                        className={'min-w-[70vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between flex-col items-center bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'}>
                        <nav className={'flex items-center flex-col justify-center'} >
                            <CustomLinkMobile href={'/'} title={'Home'} toggle={handleClick}/>
                            <CustomLinkMobile href={"/about"} title={'Sobre mí'} toggle={handleClick}/>
                            <CustomLinkMobile href={"/obras"} title={'Obras'} toggle={handleClick}/>
                            <CustomLinkMobile href={"/alumnos"} title={'Alumnos'} toggle={handleClick}/>
                            <CustomLinkMobile href={"/talleres"} title={'Talleres'} toggle={handleClick}/>
                            <CustomLinkMobile href={"/murales"} title={'Murales'} toggle={handleClick}/>
                            <CustomLinkMobile href={"https://drive.google.com/file/d/1ZEQDW8kfYdm1I77vv4KJY9fzltdb8Vwu/view?usp=drive_link"} title={'Escenografía'} toggle={handleClick}/>
                        </nav>
                        <nav className={'flex justify-center items-center gap-3 flex-wrap mt-2'}>
                            
                            {/*
                            <Link className={'w-9'} href={'/'} target={'_blank'}>
                                <LinkedInIcon/>
                            </Link>
                            <Link className={'w-9'} href={'/'} target={'_blank'}>
                                <PinterestIcon/>
                            </Link> */}
                            <Link className={'w-9'} href={'https:instagram.com/dianella.art/'} target={'_blank'}>
                                <InstagramIcon/>
                            </Link>
                            
                            <button onClick={() => setMode(mode === "light" ? 'dark' : 'light')}
                                    className={`ml-3 w-9 flex items-center justify-center rounded-full p-1 ${mode === "light" ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                            >
                                {
                                    mode === 'dark' ?
                                        <SunIcon className={'fill-dark'}/> :
                                        <MoonIcon className={'fill-dark'}/>
                                }
                            </button>
                        </nav>
                    </motion.div>

                    : null
            }

            <div className={'absolute left-[50%] top-2 translate-x-[-50%]'}>
                <Logo/>
            </div>
        </header>
    )
}

export default Navbar