import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const BgImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: -18%;
  width: 100%;
  transform: translateX(-50%);
`;

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <img src="/images/home/stats-user.svg" alt="" />,
  }

  const TradesCardData: IconCardData = {
    icon: <img src="/images/home/stats-trade.svg" alt="" />,
  }

  const StakedCardData: IconCardData = {
    icon: <img src="/images/home/stats-graph.svg" alt="" />,
  }

  return (
    <Flex pt="0" justifyContent="center" alignItems="center" flexDirection="column">
      {/* <GradientLogo height="48px" width="48px" mb="24px" /> */}
      <BgImg alt="" src="/images/home/sky-lines.png" />
      <img src="/images/butterfly.png" width="100" alt="Butterfly icon" />
      <Heading textAlign="center" scale="xl" mt="20px" >
        {t('#GetInLineForSliverLine')}
      </Heading>
      <Text textAlign="center" color="textSubtle" className='font-poppins' fontSize='20px' mt="25px" mb="40px" >
      A decentralized exchange providing the smoothest possible peer-to-peer trading experience, with safety being our core mantra. SilverLineSwap allows users to trade any token on the Binance Smart Chain in a few simple clicks, and has the added benefit of its own private SilverLineSwap Dashboard! Step in and be a part of the future token exchange economy.
      </Text>
      <Flex flexDirection={['column', null, null, 'row']} width='100%' >
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText='8000 users'
            bodyText={t('in the last 30 days')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText='8000 traders'
            bodyText={t('made in the last 30 days')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText='Staking'
            bodyText={t('Will start soon!!!')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
