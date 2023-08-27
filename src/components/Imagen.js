import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/../website images/girl-example.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}