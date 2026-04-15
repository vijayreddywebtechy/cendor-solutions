import { Bodoni_Moda, Manrope } from 'next/font/google'

export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ["400", "600", "700", "800", "900"],
  variable: '--font-bodoni',
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600"],
  variable: '--font-manrope',
  display: 'swap',
})