import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import {useInView, useMotionValue, useSpring} from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import Education from "@/components/Education"
import Logros from '@/components/Logros';

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
                <title>About us</title>
                <meta name='description' content='description'/>
            </Head>
            <TransitionEffect />
            <main className={'w-full flex flex-col justify-center items-center dark:text-light'}>
                <Layout className={'pt-16'}>
                    <AnimatedText className={'mb-16 lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb:8'} text='My About page'/>
                    <div className={'grid w-full grid-cols-8 gap-16 sm:gap-8 py-2'}>
                        <div className={'col-span-3 flex flex-col justify-start items-start xl:col-span-4 md:col-span-8'}>
                            <h2 className={'mb-4 text-lg font-bold uppercase'}>Bio</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam
                                blanditiis consequatur consequuntur eos esse, ex explicabo fugit, illum iste iusto
                                laborum molestias nesciunt omnis quas quasi, saepe tempore.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eveniet facilis iste
                                laboriosam molestias nobis nulla odit officiis repellat veniam. Blanditiis cumque
                                delectus eius ipsam iusto praesentium, quisquam totam veritatis.
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
                            <div className={'flex flex-col items-end justify-center xl:items-center'}>
                                <span className={'text-6xl font-bold md:text-6xl sm:text-4xl xs:text-3xl'}>
                                    <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className={'text-xl xl:text-center md:text-lg sm:text-base xs:text-sm'}>
                                    Projectos
                                </h2>
                            </div>
                            <div className={'flex flex-col items-end justify-center xl:items-center'}>
                                <span className={'text-6xl font-bold md:text-6xl sm:text-4xl xs:text-3xl'}>
                                    <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className={'text-xl xl:text-center md:text-lg sm:text-base xs:text-sm'}>
                                    Projects
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/*<Skills />*/}
                    <Experience/>
                    <Logros/>
                        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>

                        <ul className={'flex flex-col items-center justify-between ml-4 xs:ml-2'}>
                            <li>
                                At least 10 characters (and up to 100 characters)
                            </li>
                            <li>
                                At least one lowercase character
                            </li>
                            <li>
                                Inclusion of at least one special character, e.g., ! @ # ?
                            </li>
                        </ul>

                    
                </Layout>
            </main>
        </>
    );
};

export default About;