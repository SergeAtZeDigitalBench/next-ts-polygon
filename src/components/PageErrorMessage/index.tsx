interface IProps {
  error: string
}

const PageErrorMessage = ({ error }: IProps): JSX.Element => {
  return (
    <main>
      <h2 className="my-4 text-center text-red-700 font-semibold text-2xl">
        {error}
      </h2>
    </main>
  )
}

export default PageErrorMessage
