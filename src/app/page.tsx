import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'

const Homepage = async () => {
  return (
    <>
      {/* @ts-ignore Server component */}
      <HeroSection page="homepage" />
      {/* @ts-ignore Server component */}
      <Projects />
    </>
  )
}

export default Homepage
