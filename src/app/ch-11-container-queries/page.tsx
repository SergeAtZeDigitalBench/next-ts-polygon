/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import { containerArticles } from '@/lib/mocks'
import PageContent from './_content/PageContent'
import styles from './styles.module.css'

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        ch-11-container-queries
      </h1>
      <PageContent />

      <div
        className={clsx(
          'max-w-6xl mx-auto my-8 md:border-t md:border-slate-200',
          styles.list
        )}
      >
        {containerArticles.map(({ id, img, title, text, link }, index) => {
          const isFirstChild = index === 0
          return (
            <div
              key={id}
              className={clsx(
                '  px-4',
                isFirstChild ? styles.featured : styles.card
              )}
            >
              <article className="bg-white">
                <img src={img.src} alt={img.alt} className="rounded" />
                <h2 className="font-bold">{title}</h2>
                <p className={styles.text}>{text} </p>
                <p
                  className={clsx(
                    ' text-green-700 font-semibold text-sm underline',
                    styles.link
                  )}
                >
                  <a href={link.href} target="_blank" className="">
                    {link.name}
                  </a>
                </p>
              </article>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Page
