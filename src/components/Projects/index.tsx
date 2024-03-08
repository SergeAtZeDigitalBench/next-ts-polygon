import Image from 'next/image'

import { getProjects } from '@/lib/cms'

const Projects = async () => {
  const [projectsList, projectsError] = await getProjects()

  return (
    <section className=" bg-slate-200 h-[70vh]">
      <h2 className="text-3xl font-bold text-center my-4">Projects</h2>
      {projectsError && (
        <p className="text-center text-red-700 font-semibold">
          {projectsError}
        </p>
      )}
      <div className=" max-w-5xl mx-auto grid grid-cols-gallery gap-2 px-2">
        {projectsList &&
          projectsList.map(({ id, image, url, title }) => {
            return (
              <a
                key={id}
                href={url}
                target="_blank"
                className="h-[250px] bg-white hover:opacity-80"
              >
                <div className="h-[80%]">
                  <Image
                    src={image.href}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full"
                  />
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
