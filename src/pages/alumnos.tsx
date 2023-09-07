import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Modal from '../components/Modal'
import cloudinary from '../../src/utils/cloudinary'
import getBase64ImageUrl from '../../src/utils/generateBlurPlaceholder'
import type { ImageProps } from '../../src/utils/types'
import { useLastViewedPhoto } from '../../src/utils/useLastViewedPhoto'
import useThemeSwitcher from "../components/hooks/useThemeSwitcher"
import TransitionEffect from "../components/TransitionEffect"

const AlumnosHome: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  const [mode, setMode] = useThemeSwitcher();
  
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (photoId && !lastViewedPhoto) {
      setLastViewedPhoto(photoId);
    } else if (!photoId && lastViewedPhoto) {
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return (
    <>
      <Head>
        <title>Alumnos - Dianella.art</title>
        <meta
          name="description"
          content="Un increíble tour a través de la creatividad de mis alumnos"
        />
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
        <div className="columns-1 gap-4 sm:columns-1 xl:columns-2 2xl:columns-2">
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <div
              key={id}
              className="group relative mb-5 block w-full cursor-zoom-in"
              
              tabIndex={0} // Agrega esto para hacer que el div sea enfocable
            >
              <Image
                alt="Si no puedes ver esta imagen, contáctanos"
                key={id}
                className="transform rounded-sm brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default AlumnosHome

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER_ALUMNOS}/*`)
    .sort_by('public_id', 'asc')
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
      blurDataUrl: '', // Debes agregar el valor correcto para blurDataUrl
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
