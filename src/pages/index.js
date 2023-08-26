import Head from 'next/head'
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from '../../public/images/profile/batman-pic.png'
import AnimatedText from "@/components/AnimatedText";
import {LinkArrow} from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
    return (
        <>
            <Head>
                <title>Dianella</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
            <TransitionEffect />
            <main className={'flex items-center text-dark w-full min-h-screen'}>
                <Layout className='pt-0 md:pt-16 sm:pt-8'>
                    <div className="flex items-center justify-center w-full lg:flex-col">
                        <div className={'w-1/2 md:w-full'}>
                            <Image
                                src={ProfilePicture}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt='dilz'
                                className={'w-full h-auto lg:hidden md:inline-block md:w-full'}/>
                        </div>
                        <div className={'w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'}>
                            <AnimatedText text={'Bienvenido a mi portafolio'} className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                            <p className={'text-base text-medium my-4 dark:text-light md:text-sm sm:text-xs'}>
                                Soy una artista plástica con más de 10 años de experiencia en proyectos escenográficos,
                                dictando cursos y partcipando de dinámicas lúdicas</p>
                            <div className={'lg:w-full flex items-end lg:justify-center'}>
                                <Link
                                    className={'bg-dark dark:bg-light dark:text-dark text-light  px-6 py-2 flex items-center justify-center text-lg font-semibold dark:hover:bg-dark hover:bg-white transition duration-300 dark:hover:text-light hover:text-dark border border-solid border-transparent hover:border-dark dark:hover:border-light md:p-2 md:px-4 md:text-base'}
                                    href={'#'}>Resume {<LinkArrow
                                    className={'w-16 ml-2'}/>}</Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                
            </main>
        </>
    )
}
