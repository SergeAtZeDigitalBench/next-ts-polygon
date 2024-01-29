import React from 'react'

interface IProps {}

const Hero = ({}: IProps): JSX.Element => {
  return (
    <div className=" max-w-3xl mx-auto mt-12 flex flex-col gap-4 justify-center items-center">
      <div className="animate-slidein300 opacity-0 ">
        <div className="flex gap-2">
          <span>Introducing Linear Tasks</span> <span>❯</span>
        </div>
      </div>

      <h1 className="animate-slidein300  opacity-0 text-3xl font-bold">
        Linear is a better way
        <br />
        to build products
      </h1>

      <p className="animate-slidein500  opacity-0 text-xl font-semibold">
        Meet the new standard for modern software development.
        <br />
        Streamline issues, sprints, and product roadmaps.
      </p>

      <div className="animate-slidein700  opacity-0">
        <div className="flex gap-2">
          <span> Get started</span> <span>❯</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
