import localFont from 'next/font/local'

export const iranYekan = localFont({
  variable: '--font-iran-yekan',
  src: [
    {
      path: '../../public/fonts/IRANYekanX-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IRANYekanX-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IRANYekanX-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IRANYekanX-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
