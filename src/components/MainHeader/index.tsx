import Link from 'next/link'
import Image from 'next/image'

import Navigation from '@/components/Navigation'
import logoImg from '@/assets/logo.png'

interface IProps {}

const MainHeader = ({}: IProps): JSX.Element => {
  return (
    <header className=" max-w-7xl mx-auto flex justify-between items-center pt-4 pb-8 px-4 md:px-8 md:pb-[10%]">
      <Link
        href="/"
        className="flex gap-8 justify-center items-center text-[#ddd6cb] font-bold uppercase text-2xl font-montserrat"
      >
        <Image
          src={logoImg.src}
          alt="food platter"
          width={80}
          height={80}
          className="logoImg"
          priority
        />
        NextLevel Food
      </Link>
      <Navigation />
    </header>
  )
}

export default MainHeader
