import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Bridge from '../components/Icons/Bridge'
import Modal from '../components/Modal'
import cloudinary from '../../src/utils/cloudinary'
import getBase64ImageUrl from '../../src/utils/generateBlurPlaceholder'
import type { ImageProps } from '../../src/utils/types'
import { useLastViewedPhoto } from '../../src/utils/useLastViewedPhoto'
import useThemeSwitcher from "../components/hooks/useThemeSwitcher"
import TransitionEffect from "../components/TransitionEffect"



const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  const [mode, setMode] = useThemeSwitcher();


  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <TransitionEffect />
      <main className="mx-auto max-w-[1960px] p-4 relative">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-1 xl:columns-2 2xl:columns-3"> {/* GRID*/}

<div className={`relative mb-5 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg px-6 pb-16 pt-32 text-center shadow-highlight ${mode === 'dark' ? 'bg-black' : 'bg-white/10'}`}>
<div className="absolute inset-0 flex items-center justify-center opacity-50">
<span className="flex max-h-full max-w-full items-center justify-center">
    <Image 
        alt='Imagen'
        src={'https://res.cloudinary.com/dd38x4lsc/image/upload/v1693539513/samples/irupriqqndhg0jcnduai.jpg'}
        width={435} 
        height={700}
        objectFit="cover"
    />
</span>
<span className={`absolute left-0 right-0 bottom-0 h-[400px]`}></span>
</div>
            
            <h1 className="mt-8 mb-4 text-xl sm:text-2xl tracking-widest font-serif">
              Dianella
            </h1>
            <h1 className="mt-8 mb-4 text-xl font-bold uppercase tracking-widest">
              2023 Clases de arte
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Un increíble tour a través del diseño y creatividad de mis alumnos
            </p>
            <a
              className="pointer z-0 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
              href="https://dianella.vercel.app"
              target="_blank"
              rel="noreferrer"
              
            >
              Página principal
            </a>
          </div>
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
      
        
            
<footer className="bg-white rounded-lg shadow dark:bg-black m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://dianella.vercel.app/" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dianella</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Sobre mí</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Proyectos</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://dianella.vercel.app/" className="hover:underline">Dianella™</a>. Todos los derechos reservados.</span>
    </div>
</footer>



      
    </>
  )
}

export default Home

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER_ALUMNOS}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()
  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
