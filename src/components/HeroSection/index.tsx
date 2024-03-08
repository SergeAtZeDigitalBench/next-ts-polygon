import Image from 'next/image'

import heroImg from '@/assets/hero.svg'

interface IProps {}

const HeroSection = ({}: IProps): JSX.Element => {
  return (
    <section className=" bg-white px-2 py-8">
      <div className="min-h-[30vh] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className=" h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold my-4">Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </div>
        <div className="hidden md:h-full md:flex md:flex-col justify-center items-center">
          <Image src={heroImg} alt="hero" priority />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
