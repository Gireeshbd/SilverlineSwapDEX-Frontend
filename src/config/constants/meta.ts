import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SilverlineSwap',
  description:
    'The most popular AMM on BSC by user count! Earn SLCT through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SilverlineSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SilverlineSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SilverlineSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SilverlineSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SilverlineSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SilverlineSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SilverlineSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SilverlineSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SilverlineSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SilverlineSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SilverlineSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SilverlineSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SilverlineSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SilverlineSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SilverlineSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SilverlineSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SilverlineSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SilverlineSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SilverlineSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SilverlineSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SilverlineSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SilverlineSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SilverlineSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SilverlineSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('SilverlineSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('SilverlineSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SilverlineSwap')}`,
      }
    default:
      return null
  }
}
