import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";
import dynamic from "next/dynamic";


const Logros = ({ position, companyLink, time, address, work, obras }) => {  // Cambié el nombre de las props de "obra1", "obra2", ... a "obras" para que contenga todas las obras
    const ref = useRef();
    return <li ref={ref} className={'my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'}>
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
            <h3 className={'capitalize font-bold text-2xl sm:text-xl xs:text-lg'}>{position} &nbsp;<a href={companyLink} target={'_blank'} ></a>
            </h3>
            <span className={'capitalize font-medium text-dark/75 xs:text-sm '}>
                {time} | {address}
            </span>
            <p className={'font-medium w-full md:text-sm'}>
    {work}<br />
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
                Exposiciones Pictóricas Colectivas
            </h2>
            <div ref={ref} className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}>
                <motion.div style={{scaleY: scrollYProgress}} className={'absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'} />
                <ul className={'flex flex-col items-center justify-between ml-4 xs:ml-2'}>
                    <Logros
                        position={'VIII ANIVERSARIO “DÍA DEL ARTISTA PLÁSTICO”'}
                        time={'2012'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'XIX “TINTA DE GUARANGO EXPOSICIÓN”'}
                        time={'2012'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'XLVII ANIVERSARIO EXPOSICIÓN COLECTIVA CONTRASTES'}
                        time={'2012'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'XIX “TINTA DE GUARANGO” “EXPOSICIÓN EL PATRONATO DE ICA UNIDOS PARA EL DESARROLLO”'}
                        time={'2013'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'LII “DÍA DEL ARTISTA PLÁSTICO VISUALES”'}
                        time={'2013'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'XLIX ANIVERSARIO VISUALES'}
                        time={'2014'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'LIII “DÍA DEL ARTISTA PLÁSTICO ”CROMATISMO VISUAL.”'}
                        time={'2014'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'“EXPRESIONES VISUALES”'}
                        time={'2015'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'“LIBERTAD Y COLOR”'}
                        time={'2016'}
                        address={'Ica, Ica'}
                        work={'Exhibición Regional de Pintura'}
                    />
                    <Logros
                        position={'“ESENCIA CREW”'}
                        time={'2016'}
                        address={'Ica, Ica'}
                        work={'Exposición Colectiva'}
                    />
                    <Logros
                        position={'“BICOLOR” 2016 Galería Quinde shopping Plaza'}
                        time={'2016'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    <Logros
                        position={'“Aniversario LI” SERVULO GUTIÉRREZ ALARCÓN'}
                        time={'2016'}
                        address={'Ica, Ica'}
                        work={'Exposición Artística'}
                    />
                    </ul>
            </div>
        </div>
    );
};


export default dynamic (() => Promise.resolve(Experience), {ssr: false})
