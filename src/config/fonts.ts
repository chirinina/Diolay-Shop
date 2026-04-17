import { Inter, Dancing_Script } from 'next/font/google';




export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const titleFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-title',
  display: 'swap',
});