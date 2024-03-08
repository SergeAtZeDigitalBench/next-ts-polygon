import { projects } from '@/constants'
import Image from 'next/image'

const Projects = (): JSX.Element => {
  return (
    <section className=" bg-slate-200 h-[70vh]">
      <h2 className="text-3xl font-bold text-center my-4">Projects</h2>
      <div className=" max-w-5xl mx-auto grid grid-cols-gallery gap-2 ">
        {projects.map(({ id, image, url, title }) => {
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              className="h-[250px] bg-white hover:opacity-80"
            >
              <div className="h-[80%]">
                <Image src={image} alt={title} className="h-full" />
              </div>
              <div className="h-[20%] flex flex-col justify-center items-center">
                <h4 className="font-semibold capitalize">{title}</h4>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
