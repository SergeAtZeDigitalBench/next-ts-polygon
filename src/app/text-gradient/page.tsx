import { paragraphs } from '@/constants'

const TextGradientPage = async () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="mb-8 text-5xl font-bold textGradient">
        Hi, text gradient
      </h1>
      {paragraphs.map(({ id, text }) => (
        <p key={id} className="text-xl font-bold textGradient">
          {text}
        </p>
      ))}
    </div>
  )
}

export default TextGradientPage
