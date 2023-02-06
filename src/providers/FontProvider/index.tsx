import React from "react"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: React.ReactNode
}

const FontProvider = ({ children }: Props): JSX.Element => (
  <div className={inter.className}>{children}</div>
)

export default FontProvider
