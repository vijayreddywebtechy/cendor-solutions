import { Bodoni_Moda, Manrope } from 'next/font/google'

export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  axes: ['opsz'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600"],
  variable: '--font-manrope',
  display: 'swap',
})