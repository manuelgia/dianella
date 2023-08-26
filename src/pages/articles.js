import React, {useRef} from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import BlogImg from '../../public/images/articles/create loading screen in react js.jpg'
import {motion, useMotionValue} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({img, title, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0)
    const imgRef = useRef(null)
    function handleMouse(event){
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event){
        imgRef.current.style.display = 'none';
        x.set(0)
        y.set(0)
    }
    return (
        <Link
            href={link}
            target={'_blank'}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className={'capitalize text-xl font-semibold hover:underline'}>{title}</h2>
            <FramerImage
                initial={{opacity: 0}}
                whileInView={{opacity:1,transition:{duration:0.2}}}
                style={{x:x, y:y}}
                ref={imgRef}
                src={img}
                alt={title} className={'z-10 w-96 absolute h-auto hidden rounded-lg md:!hidden'} />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li
            initial={{y: 200}}
            whileInView={{y:0,transition:{duration:0.5, ease: 'easeInOut'}}}
            viewport={{once: true}}
            className={'relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col'}>
            <MovingImg title={title} img={img} link={link}/>
            <span className={'text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'}>{date}</span>
        </motion.li>
    )
}
const FeaturedArticle = ({title, time, img, link, summary}) => {
    return (
        <li className={'col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light dark:text-light rounded-2xl relative'}>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>
            <Link href={link} target={'_blank'}
                  className={'w-full cursor-pointer overflow-hidden rounded-lg inline-block'}>
                <FramerImage
                    src={img}
                    alt={title}
                    className={'w-full h-auto'}
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target={'_blank'}>
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 xs:text-lg">
                    {title}
                </h2>
                <p className={'text-sm mb-2'}>{summary}</p>
                <span className={'text-primary font-semibold'}>{time}</span>
            </Link>
        </li>
    )
}

const Articles = () => {
    return (
        <>
            <Head>
                <title>Articles</title>
                <meta name='description' content='description'/>
            </Head>
            <TransitionEffect />
            <main className={'w-full mb-16 flex flex-col  items-center justify-center overflow-hidden'}>
                <Layout className={'pt-16'}>
                    <AnimatedText text={'Articles'} className={'mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'}/>
                    <ul className={'grid grid-cols-2 gap-16 lg-gap-8 md:grid-cols-1 md:gap-y-16'}>
                        <FeaturedArticle
                            title={'Blog Post'}
                            link={'/'}
                            img={BlogImg}
                            summary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos excepturi fugiat id impedit minima natus nihil optio porro praesentium? Ad, architecto cum dolorem earum facilis non quidem. Dolore, nulla?'}
                            time={'2 mins'}
                        />
                        <FeaturedArticle
                            title={'Blog Post'}
                            link={'/'}
                            img={BlogImg}
                            summary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos excepturi fugiat id impedit minima natus nihil optio porro praesentium? Ad, architecto cum dolorem earum facilis non quidem. Dolore, nulla?'}
                            time={'2 mins'}
                        />
                    </ul>
                    <h2 className={'font-bold text-4xl w-full my-16 text-center dark:text-light'}>All Articles</h2>
                    <ul>
                        <Article
                            title={'Blog Post'}
                            link={'/'}
                            img={BlogImg}
                            date={'2023'}

                        />
                        <Article
                            title={'Blog Post'}
                            link={'/'}
                            img={BlogImg}
                            date={'2023'}

                        />
                        <Article
                            title={'Blog Post'}
                            link={'/'}
                            img={BlogImg}
                            date={'2023'}

                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default Articles;