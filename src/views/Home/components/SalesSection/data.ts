import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: true,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'trade', alt: 'Trade' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'SilverlineSwap makes it easy to make your crypto work for you.',
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'earn', alt: 'Earn' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'SilverLine makes our Earth Whirl round',
  bodyText:
    'SLN token is at the heart of the SilverLineSwap ecosystem. Buy it , Trade it , Farm it , Stake it , Win it , Spend it , ...,Gosh , You can even secure your portfolio with Gun !',
  reverse: true,
  primaryButton: {
    to: '/swap?outputCurrency=0xC8B7fE1d6B2A7b21D44D2239831Ac6079A471E16',
    text: 'Buy SLCT',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: 'token', alt: 'Token' },
    ],
  },
}

