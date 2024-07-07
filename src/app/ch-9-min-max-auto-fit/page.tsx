import clsx from 'clsx'
import styles from './styles.module.css'

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-8">
        ch-9-min-max-auto-fit
      </h1>

      <h2 className="mb-8 text-2xl font-bold text-center">
        minmax(200px, 1fr)
      </h2>

      <ul className="grid grid-cols-[repeat(3,_minmax(200px,_1fr))] gap-2 p-2">
        {[1, 2, 3, 4, 5, 6].map((num) => {
          return (
            <li key={num} className="bg-orange-300 p-2 rounded">
              {content}
            </li>
          )
        })}
      </ul>

      <h2 className="my-8 text-2xl font-bold text-center underline">
        Auto-fit and minmax(200px, 1fr)
      </h2>

      <ul className={clsx('grid gap-2 p-2', styles.autoFitCols)}>
        {[1, 2, 3, 4, 5, 6].map((num) => {
          return (
            <li key={num} className="bg-orange-300 p-2 rounded">
              {content}
            </li>
          )
        })}
      </ul>

      <h2 className="my-8 text-2xl font-bold text-center underline">
        Auto-fill and minmax(200px, 1fr)
      </h2>

      <ul className={clsx('grid gap-2 p-2', styles.autoFillCols)}>
        {[1, 2, 3, 4, 5, 6].map((num) => {
          return (
            <li key={num} className="bg-orange-300 p-2 rounded">
              {content}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Page
