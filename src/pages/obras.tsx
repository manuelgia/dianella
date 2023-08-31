import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Bridge from '../components/Icons/Bridge'
import Modal from '../components/Modal'
import cloudinary from '../../src/utils/cloudinary'
import getBase64ImageUrl from '../../src/utils/generateBlurPlaceholder'
import type { ImageProps } from '../../src/utils/types'
import { useLastViewedPhoto } from '../../src/utils/useLastViewedPhoto'

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  console.log("Image URLs:");
  images.forEach(({ id, public_id, format }) => {
      console.log(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`);
    });


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
      <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-1 xl:columns-3 2xl:columns-3"> {/* GRID*/}
          {/* Div de la tarjeta de descripción*/} <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20"> 
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            
              <h1 className="mt-8 mb-4 text-xl sm:text-2xl tracking-widest font-serif">
                Dianella
              </h1>
              <h1 className="mt-8 mb-4 text-xl font-bold uppercase tracking-widest">
                Obras
              </h1>
              <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                Un increíble tour a través de mis obras
              </p>
              <a
                className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
                href="https://dianella.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Página principal
              </a>
          </div>
          {images.map(({ id, public_id, format, blurDataUrl, customMetadata }) => (
            <div
            key={id}
            className="group relative mb-5 cursor-zoom-in overflow-hidden rounded-lg shadow-highlight"
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
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 transition-opacity group-hover:opacity-100" style={{ backdropFilter: 'blur(7px)', background: 'rgba(255, 255, 255, 0.5)', width: '100%', height: '100%', padding: '20px' }}>
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                {customMetadata && customMetadata.alt ? customMetadata.alt : 'Default Alt'}
              </h2>
              <h1 className="title-font text-lg font-medium text-black-900 mb-3">
                {customMetadata && customMetadata.caption ? customMetadata.caption : 'Default Caption'}
              </h1>
              <p className="leading-relaxed">
                {customMetadata && customMetadata.medidas ? customMetadata.medidas : 'Default Medidas'}
              </p>
            </div>


          </div>
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
    .expression(`folder:${process.env.CLOUDINARY_FOLDER_OBRAS}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute();

  const reducedResults = await Promise.all(results.resources.map(async (result, i) => {
    const metadata = await cloudinary.v2.api.resource(result.public_id, { metadata: true });

     const customMetadata = metadata.context?.custom || null; // Obtener metadatos personalizados

    return {
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      customMetadata: customMetadata || null // Almacena los metadatos en customMetadata
    };
  }));

  const blurImagePromises = reducedResults.map(image => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  reducedResults.forEach((image, i) => {
    image.blurDataUrl = imagesWithBlurDataUrls[i];
  });

  return {
    props: {
      images: reducedResults,
    },

    
  };
}