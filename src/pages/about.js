import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import {useInView, useMotionValue, useSpring} from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import TransitionEffect from "../components/TransitionEffect";
import Education from "../components/Education"
import Logros from '../components/Logros';
import Image from 'next/image';
import ImagenAbout from '../../public/images/profile/IMG_20230503_080618.jpg'



const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, motionValue, value])
    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>

}


const About = () => {
    return (
        <>
        <Head>
            <title>Sobre mí - Dianella.art</title>
                <meta
                name="description"
                content="Descubre más acerca de mi trayectoria artística"
                />
                <meta
                property="og:image"
                content="https://res.cloudinary.com/dd38x4lsc/image/upload/v1694145782/dianella/aczlqv8iym68yfzb8x6a.jpg"
                />
                <meta
                name="twitter:image"
                content="https://res.cloudinary.com/dd38x4lsc/image/upload/v1694145782/dianella/aczlqv8iym68yfzb8x6a.jpg"
                />
        </Head>
            <TransitionEffect />
            <main className={'w-full flex flex-col justify-center items-center dark:text-light'}>
                <Layout className={'pt-16'}>
                    <AnimatedText className={'mb-16 lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb:8'} text='Resumen profesional'/>
                    <div className="relative">
                        <div className={'grid w-full grid-cols-8 gap-16 sm:gap-8 py-2'}>
                            <div className={'col-span-3 flex flex-col justify-start items-start xl:col-span-4 md:col-span-8'}>
                                <h2 className={'mb-4 text-lg font-bold uppercase'}>Bio</h2>
                                <p>
                                    <b>Artista plástica</b> y <b>Diseñadora escenográfica </b> 
                                    que disfruta 
                                    trabajar en entornos dinámicos y en 
                                    contacto con el público con un gran 
                                    interés en producir obras de arte que 
                                    aporten al desarrollo de la educación y 
                                    cultura del país. Dedicada a la enseñanza artística desde el año 2013.
                                </p>
                            
                            </div>
                            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col gap-16 justify-between items-start">
                                <div className={'flex flex-col items-end justify-center xl:items-center'}>
                                    <span className={'text-6xl font-bold md:text-6xl sm:text-4xl xs:text-3xl'}>
                                        <AnimatedNumbers value={100}/>+
                                    </span>
                                    <h2 className={'text-xl xl:text-center md:text-lg sm:text-base xs:text-sm'}>
                                        Alumnos
                                    </h2>
                                </div>
                                {/*<div className={'flex flex-col items-end justify-center xl:items-center'}>
                                    <span className={'text-6xl font-bold md:text-6xl sm:text-4xl xs:text-3xl'}>
                                        <AnimatedNumbers value={50}/>+
                                    </span>
                                    <h2 className={'text-xl xl:text-center md:text-lg sm:text-base xs:text-sm'}>
                                        Projectos
                                    </h2>
                                </div>
                                */}
                                    <div className={'flex flex-col items-end justify-center xl:items-center'}>
                                        <span className={'text-6xl font-bold md:text-6xl sm:text-4xl xs:text-3xl'}>
                                            <AnimatedNumbers value={9}/>+
                                        </span>
                                        <h2 className={'text-xl xl:text-center md:text-lg sm:text-base xs:text-sm'}>
                                            Años de Experiencia
                                        </h2>
                                    </div>
                                
                                </div>
                            
                            <div className="relative inset-y-0 right-0 w-[300px]">
                                <Image
                                src={ImagenAbout}
                                alt="Imagen de arte"
                                layout="responsive"
                                width={300}
                                height={400}
                                className='h-auto max-w-lg rounded-full'
                                style={{ margin: '0 auto' }}
                                />
                            </div>
                        </div>
                    </div>
                                    {/*<Skills />*/}
                    <Experience/>
                    <Logros/>
                </Layout>
            </main>
        </>
    );
};

export default About;