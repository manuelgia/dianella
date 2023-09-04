import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import {Montserrat, Mr_Dafoe} from 'next/font/google';
import Footer from "../components/Footer";
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";
import { Analytics } from '@vercel/analytics/react';


const mr_Dafoe = Mr_Dafoe({
    subsets:['latin'],
    variable: '--font-mr',
    weight: '400'
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont'
})
export default function App({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${montserrat.variable} ${mr_Dafoe.variable} font-mont bg-light dark:bg-dark w-full min-w-screen`}>
                <Navbar/>
                <AnimatePresence mode={'wait'}>
                    <Component key={router.asPath} {...pageProps} />
                    <Analytics/>
                </AnimatePresence>
                
            </main>
            
        </>

    )
}
