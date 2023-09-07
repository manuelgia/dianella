import { useState, useEffect, useCallback, useMemo } from 'react';
import AnimatedText from '../components/AnimatedText';
import AnimatedTittle from '../components/AnimatedTittle';
import { LinkArrow } from '../components/Icons';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import TransitionEffect from "../components/TransitionEffect"
import Image from 'next/image'; // Importa el componente Image de Next.js
import { Cinzel, Alegreya_Sans } from 'next/font/google';

import ProfilePicture from '../../public/images/profile/marty-o-neill-Jo-ypJVt8gQ-unsplash.jpg';
import ImagenPrueba from '../../public/images/profile/PSX_20210109_133652.jpg';
import ImagenPrueba2 from '../../public/images/profile/horizontal.jpg';
import ImagenPrueba3 from '../../public/images/profile/prueba169.jpg';

const cinzel = Cinzel({ weight: '400', subsets: ['latin']  })
const alegreya = Alegreya_Sans({ weight: '400', subsets: ['latin']  })


export default function Home() {
  const images = useMemo(
    () => [ProfilePicture, ImagenPrueba, ImagenPrueba2, ImagenPrueba3],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  const nextImage = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  const prevImage = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  return (
    <>
      <Head>
        <title>Dianella.art</title>
        <meta
          name="description"
          content="Artista plástica, Diseñadora escenográfica, arte, Lima, artista Lima, Clases de arte, escenografo, artista plastico, artista plastica, artista, ensad"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dd38x4lsc/image/upload/v1694064468/dianella/yxkxeakldife2iqhaqfg.jpg"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dd38x4lsc/image/upload/v1694064468/dianella/yxkxeakldife2iqhaqfg.jpg"
        />
      </Head>
      <TransitionEffect />
      <main className="relative flex flex-col items-center justify-center text-dark w-full min-h-screen">
        {/* Div que contiene el texto */}
        <div className={`bg-white p-4 rounded-lg shadow-lg dark:bg-dark opacity-90 text-center ${styles.textContainer} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 md:w-2/3 sm:w-4/6`}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-medium dark:text-light" style={{ marginBottom: '0.6rem' }}><span className={cinzel.className} style={{ letterSpacing: '2px' }}>
          Artista plástica y Diseñadora escenográfica 
          </span>
          </p>
          <AnimatedTittle
            text="Dianella. Art"
            className=" font- text-2xl sm:text-4xl md:text-2xl lg:text-6xl xl:text-7xl text-dark dark:text-light"
            
          />
          <p className="text-base sm:text-3x1 md:text-xl lg:text-2xl text-medium dark:text-light " style={{ marginTop: '0.6rem' }}><span className={alegreya.className} style={{ letterSpacing: '2px' }}>
          GLADYS MANRIQUE
          </span>
          </p>
          
          <Link
            className="bg-dark dark:bg-light dark:text-dark text-light px-6 py-2 flex items-center justify-center text-lg font-semibold dark:hover:bg-dark hover:bg-turquesa transition duration-300 dark:hover:text-light hover:text-dark border border-solid border-transparent hover:border-dark dark:hover:border-light mt-4 md:p-2 md:px-4 md:text-base"
            href="https://api.whatsapp.com/send?phone=51928665580&text=Hola,%20vengo%20de%20dianella.art"
            >
            Contáctame
          </Link>
        </div>

        {/* Imágenes con transiciones */}
        <div className={`absolute top-0 left-0 w-full h-full overflow-hidden ${styles.carouselWrapper}`}>
          {images.map((src, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
                index === activeIndex ? 'z-0 opacity-100' : 'z-0 opacity-0'
              }`}
              data-carousel-item={index === activeIndex ? 'active' : undefined}
            >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-auto transition-opacity duration-700 ease-in-out"
              style={{
                opacity: index === activeIndex ? 1 : 0,
              }}
            />
          </div>
        ))}
        </div>

        {/* Botones de navegación */}
        <div className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <button type="button" data-carousel-prev onClick={prevImage}>
            {/* Agrega el ícono del botón "Previous" aquí */}
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
            <span className="sr-only">Previous</span>
            </span>
          </button>
        </div>
        <div className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <button type="button" data-carousel-next onClick={nextImage}>
            {/* Agrega el ícono del botón "Next" aquí */}
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
          </button>
        </div>
      </main>
      
    </>
  );
}
