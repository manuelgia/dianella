import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";
import dynamic from "next/dynamic";


const Details = ({ position, company, companyLink, time, address, work, obras }) => {  // Cambié el nombre de las props de "obra1", "obra2", ... a "obras" para que contenga todas las obras
    const ref = useRef();
    return <li ref={ref} className={'my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'}>
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
            <h3 className={'capitalize font-bold text-2xl sm:text-xl xs:text-lg'}>{position} &nbsp;<a href={companyLink} target={'_blank'} className={'text-turquesa dark:text-turquesaDark capitalize'}>@{company}</a>
            </h3>
            <span className={'capitalize font-medium text-dark/75 xs:text-sm '}>
                {time} | {address}
            </span>
            <p className={'font-medium w-full md:text-sm'}>
    {work}<br /><br/>
    {Array.isArray(obras) && obras.length > 0 ? (
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {obras.map((obra, index) => (
                <li key={index}>{obra}</li>
            ))}
        </ul>
    ) : null}
</p>
        </motion.div>
    </li>
};

const Experience = () => {
    // ... tu código restante ...
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className={'my-64'}>
            <h2 className="text-center text-6xl mb-32 md:text-6xl xs:text-4xl md:mb-16">
                Experiencia
            </h2>
            <div ref={ref} className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}>
                <motion.div style={{scaleY: scrollYProgress}} className={'absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'} />
                <ul className={'flex flex-col items-center justify-between ml-4 xs:ml-2'}>
                    <Details
                        position={'Profesora de dibujo y pintura'}
                        company={'Adagio academia'}
                        companyLink={'https://www.facebook.com/people/Adagio-academia-de-música/100064119245444/'}
                        time={'01/2013 - 03/2013'}
                        address={'Ica, Ica'}
                        work={'Talleres de dibujo y pintura a niños.'}
                    />
                    <Details
                        position={'Realizadora de escenografía'}
                        company={'Hotel real Ica'}
                        companyLink={'https://real.hoteles-en-ica.com/es/'}
                        time={'12/2015 - 12/2015'}
                        address={'Ica, Ica'}
                        work={'Realización de Instalación artistica para el evento "Black and White"- Hotel Real Ica'}
                    />
                    <Details
                        position={'Profesora de dibujo y pintura'}
                        company={'Tomiko Academia'}
                        companyLink={''}
                        time={'01/2016 - 04/2016'}
                        address={'Ica, Ica'}
                        work={'Talleres de dibujo y pintura a niños.'}
                    />
                    <Details
                        position={'Artista Plástica y Tallerista de Arte'}
                        company={'Quinde Shoping Plaza'}
                        companyLink={'https://elquinde.pe'}
                        time={'12/2015 - 12/2016'}
                        address={'Ica, Ica'}
                        work={'Talleres de dibujo y pintura a publico general. Venta y exposición de cuadros.'}
                    />
                    <Details
                        position={'Profesora de dibujo y pintura'}
                        company={'VANEKA'}
                        companyLink={'https://www.facebook.com/1Vaneka'}
                        time={'05/2017 - 02/2020'}
                        address={'Lima, Lima'}
                        work={'Talleres de dibujo y pintura a niños.'}
                    />
                    <Details
                        position={'Profesora de artes visuales y música'}
                        company={'La Nube Feliz'}
                        companyLink={'https://www.facebook.com/lanubefeliz.pe/'}
                        time={'2020 - 2021'}
                        address={'Lima, Lima'}
                        work={'Profesora de dibujo, pintura y musica en plataformas virtuales.'}
                    />
                    <Details
                        position={'Realizadora de escenografía teatral'}
                        company={'Inspiraciones e Invenciones Escénicas S.A.C.'}
                        companyLink={'https://www.facebook.com/lanubefeliz.pe/'}
                        time={'07/2017 -Actualidad'}
                        address={'Lima, Lima'}
                        work={'Realización y asistencia en escenografía, maquillaje, vestuario, y utilería para las obras teatrales:'}
                        obras={[
                                "“No hay Ladrón que por bien no venga” Markham College 2017",
                                "“Mamma Mía”- Markham College 2018",
                                "“Mago de Oz”- Cambridge College 2019",
                                "“Matilda”- Cambridge College 2019",
                                "“Clue”-Markham College 2022",
                                "“El musical (Matilda, Hairspray, The Wicked, Anita La Huerfanita, School of Rock, Encanto, El rey león) - Markham College 2022",
                                "“Charlie y la fábrica de chocolates” Cambridge College 2022."
                            ]}


                    />
                </ul>
            </div>
        </div>
    );
};


export default dynamic (() => Promise.resolve(Experience), {ssr: false})
