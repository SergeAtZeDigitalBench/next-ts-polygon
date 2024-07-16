import { Spinner } from '@nextui-org/spinner'

const LoadingPage = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  )
}

export default LoadingPage
