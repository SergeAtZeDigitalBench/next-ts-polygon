import classnames from 'classnames'

interface IProps {
  children: React.ReactNode
  className?: string
}

const PageTitle = ({ children, className }: IProps): JSX.Element => (
  <h1
    className={classnames(
      'text-white text-center text-3xl font-bold my-5',
      className
    )}
  >
    {children}
  </h1>
)

export default PageTitle
