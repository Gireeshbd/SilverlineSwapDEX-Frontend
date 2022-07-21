import React from 'react'
import styled from 'styled-components'
import { Flex, Text, TicketFillIcon, PredictionsIcon, Heading, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import ColoredWordHeading from '../ColoredWordHeading'
import IconCard, { IconCardData } from '../IconCard'
import PredictionCardContent from './PredictionCardContent'
import LotteryCardContent from './LotteryCardContent'
import CompositeImage from '../CompositeImage'

const TransparentFrame = styled.div<{ isDark: boolean }>`
  background: linear-gradient(to bottom, #713AA6, #6B2EA3);
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 23px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`

const WinSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <TransparentFrame isDark={theme.isDark}>
        <Flex alignItems='center' flexDirection={['column',null,'row',null]} >
          <div style={{flex:1}} >
            <img src="/images/home/lottery.png" alt="Lottery" />
          </div>
          <div style={{flex:1}} >
            <Heading scale='xl' color='text' >
              Lottery<br/>$*****
            </Heading>
            <Heading scale='lg' color='text' >
              In SLN prizes this around
            </Heading>
            <Text fontSize='20px' fontFamily='Poppins' mt='20px' >Buy tickets with SLCT, win SLCT if your numbers match</Text>
            <Button variant='secondary' width={156} mt='30px' className='sl-sky-glow' >Buy Tickets</Button>
          </div>
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default WinSection
