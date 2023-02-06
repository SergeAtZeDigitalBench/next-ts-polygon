import type { AppProps } from "next/app"

import FontProvider from "@/providers/FontProvider"
import "@/styles/globals.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FontProvider>
      <Component {...pageProps} />
    </FontProvider>
  )
}
