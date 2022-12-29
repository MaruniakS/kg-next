import localFont from '@next/font/local'
export const mont = localFont({
  src: [
    {
      path: './Mont/MontRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Mont/MontRegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/Mont/MontBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/Mont/MontBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Mont/MontLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Mont/MontLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './Mont/MontThin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Mont/MontThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
  ],
})
