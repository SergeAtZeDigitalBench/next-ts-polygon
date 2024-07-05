/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, type ComponentProps, forwardRef } from 'react'
import Link from 'next/link'

import type { Article } from '@/types'

interface Props extends Omit<ComponentProps<'li'>, 'ref'> {
  article: Article
}

const ArticleCard = forwardRef<HTMLLIElement, Props>(
  ({ article, className, ...restDivProps }, ref): JSX.Element => {
    const [featureImgError, setFeatureImgError] = useState(false)

    const { title, image, id } = article

    return (
      <li
        ref={ref}
        className={`relative row-span-3 grid w-full grid-rows-[subgrid] gap-0 overflow-hidden rounded-xl bg-white before:pointer-events-none before:absolute before:inset-0 before:z-30 before:rounded-xl before:border-sky-600 before:hover:border-4 has-[:focus-visible]:focus-within:before:border-4 ${className}`}
        {...restDivProps}
      >
        <div className="relative aspect-[1/1.15] w-full bg-black/10">
          <span className="absolute left-[-40px] top-[16px] z-[21] flex h-[32px] w-[143px] rotate-[-45deg] items-center justify-center bg-[#B50700]">
            <span className="text-[10px] font-bold text-white sm:text-xs">
              Save £ 50
            </span>
          </span>

          <img
            src={image.url}
            alt={image.alt}
            className="relative z-10 aspect-[1/1.15] w-full object-cover"
            loading="lazy"
            decoding="async"
            hidden={featureImgError}
            onError={() => {
              setFeatureImgError(true)
            }}
          />

          <div className="absolute inset-0 z-0 flex h-full items-center justify-center">
            <img
              src={'/image_placeholder.svg'}
              alt=""
              className="w-2/5 object-contain opacity-20"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="row-span-2 grid grid-rows-[subgrid] border-t border-neutral-200 bg-white p-4 text-lg font-bold">
          <Link
            href={`/article/${id}`}
            className="before: z-40 inline-block pb-3.5 outline-none before:absolute before:inset-0"
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </Link>
          <div className="flex gap-1">
            <span
              data-testid="product-old-price"
              className="font-normal line-through opacity-75"
            >
              £ 200
            </span>
            <span className="text-[#B50700]">£ 150</span>
          </div>
        </div>
      </li>
    )
  }
)

ArticleCard.displayName = 'ArticleCard'

export default ArticleCard
