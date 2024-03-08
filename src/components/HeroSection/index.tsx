import Image from 'next/image'

import { getHeroSection } from '@/lib/cms'

interface IProps {
  page: string
}

const HeroSection = async ({ page }: IProps) => {
  const [heroSection, fetchError] = await getHeroSection(page)

  return (
    <section className=" bg-white px-2 py-8">
      <div className="min-h-[30vh] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className=" h-full flex flex-col justify-center items-center">
          {fetchError && (
            <p className="text-center text-red-700 font-semibold">
              {fetchError}
            </p>
          )}
          {heroSection && (
            <h1 className="text-5xl font-bold my-4">{heroSection.title}</h1>
          )}
          {heroSection && <p>{heroSection.text}</p>}
        </div>
        <div className="hidden md:h-full md:flex md:flex-col justify-center items-center">
          {heroSection && (
            <Image
              src={heroSection.image.href}
              alt={heroSection.image.alt}
              width={heroSection.image.width}
              height={heroSection.image.height}
              priority
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
