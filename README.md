## Adding the slide-in animation

Article: https://www.builder.io/blog/stagger-text-animation-tailwind

To enhance Tailwind's animation capabilities, 
modify theme.extend.animation and theme.extend.keyframes in the tailwind.config.js file:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
  },
  plugins: [],
};

```
This code snippet defines a new slidein animation. The from keyframe starts with the content at 0% opacity and slightly above its final position, while the to keyframe completes the animation at 100% opacity and its final position.

The animation lasts 1 second with an ‘ease’ timing-function and a 300ms delay.

Apply this animation to each of the four elements representing the hero text in Hero.tsx:

```jsx
<!-- Element 1 -->
<div className="animate-slidein ...">
  <div className="...">Introducing Linear Asks</div>
  <img loading="lazy" src="..." className="..." alt="Icon" />
</div>

<!-- Element 2 -->
<h1 className="animate-slidein ...">
  Linear is a better way
  <br />
  to build products
</h1>

<!-- Element 3 -->
<p className="animate-slidein ...">
  Meet the new standard for modern software development.
  <br />
  Streamline issues, sprints, and product roadmaps.
</p>

<!-- Element 4 -->
<div className="animate-slidein ...">
  <div className="...">Get started</div>
  <img loading="lazy" src="..." className="..." alt="Arrow icon" />
</div>
```

### Intro to Next.js V3

https://scottmoss.notion.site/scottmoss/Intro-to-Next-js-V3-6cefbdba58d94e3897dcb8d7e7fc0337

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
