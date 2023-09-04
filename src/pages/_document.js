import {Html, Head, Main, NextScript} from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&family=Roboto:ital,wght@1,300;1,700&display=swap" rel="stylesheet"/>

            </Head>            
            <body>
            <Script strategy='beforeInteractive' id={'theme-switcher'}>
                {`
                console.log('test')
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      document.documentElement.classList.add('dark')
                    } else {
                      document.documentElement.classList.remove('dark')
                    }
          `}
            </Script>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
