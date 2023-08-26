import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import {GithubIcon} from "@/components/Icons";
import Project1 from '../../public/images/projects/agency-website-cover-image.jpg'
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image)
const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className={'w-full flex items-center justify-between rounded-3xl dark:text-light rounded-br-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'}>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link className={'w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'} href={link} target={'_blank'}>
                <FramerImage
                    src={img}
                    title={title}
                    alt={title}
                    className={'w-full h-auto'}
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className={'w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'}>
                <span className={'text-primary font-medium text-xl xs:text-base'}>{type}</span>
                <Link className={'hover:underline underline-offset-2'} href={link} target={'_blank'}>
                    <h2 className={'my-2 w-full text-left text-4xl font-bold sm:text-sm'}>{title}</h2>
                </Link>
                <p className={'font-medium my-2 text-dark dark:text-light sm:text-sm'}>{summary}</p>
                <div className={'mt-2 flex items-center'}>
                    <Link className={'w-10'} href={github} target={'_blank'}><GithubIcon/></Link>
                    <Link className={'ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'} href={link}
                          target={'_blank'}>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({title, type, img, link, github}) => {
    return (
        <article
            className={'w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light dark:text-light bg-light dark:bg-dark p-6 relative xs:p-4'}>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link className={'w-full cursor-pointer overflow-hidden rounded-lg'} href={link} target={'_blank'}>
                <FramerImage
                    src={img}
                    title={title}
                    alt={title}
                    className={'w-full h-auto'}
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                />
            </Link>
            <div className={'w-full flex flex-col items-start justify-between mt-4'}>
                <span className={'text-primary font-medium text-xl lg:text-lg md:text-base'}>{type}</span>
                <Link className={'hover:underline underline-offset-2'} href={link} target={'_blank'}>
                    <h2 className={'my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-sm'}>{title}</h2>
                </Link>
                <div className={'w-full mt-2 flex items-center justify-between'}>
                    <Link className={' text-lg font-semibold underline md:text-base'} href={link}
                          target={'_blank'}>Visit Project</Link>
                    <Link className={'w-8 md:w-6'} href={github} target={'_blank'}><GithubIcon/></Link>

                </div>
            </div>
        </article>
    )
}
const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name='description' content='description'/>
            </Head>
            <TransitionEffect />
            <main className={'w-full mb-16 flex flex-col items-center justify-center'}>
                <Layout className={'pt-16'}>
                    <AnimatedText className={'mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'} text='Projects'/>
                    <div className="grid grid-cols-12 gap-16 gap-y-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title={'Macan Website'}
                                img={Project1}
                                type={'Wordpress'}
                                link={'/'}
                                summary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis cupiditate deleniti dolore eius, error minus nostrum optio perspiciatis porro quos rerum tempora voluptate? Assumenda cum minus temporibus vel voluptatibus. '}
                                github={'/'}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title={'Macan Website'}
                                img={Project1}
                                type={'Wordpress'}
                                link={'/'}
                                github={'/'}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title={'Macan Website'}
                                img={Project1}
                                type={'Wordpress'}
                                link={'/'}
                                github={'/'}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;