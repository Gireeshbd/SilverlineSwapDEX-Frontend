import React from 'react'
import { ArrowBackIcon, ArrowForwardIcon, BunnyCardsIcon, Flex, IconButton } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useGetCurrentEpoch, useGetSortedRounds } from 'state/predictions/hooks'
import useSwiper from '../hooks/useSwiper'

const StyledPrevNextNav = styled(Flex)`
  align-items: center;
  display: none;
  justify-content: space-between;
  overflow: initial;
  position: relative;
  width: 128px;

  box-shadow: ${({ theme }) => theme.shadows.level1};
  border-radius: ${({ theme }) => theme.radii.default};
  background-color: #6000cd;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`

const Icon = styled.div`
  cursor: pointer;
  left: 50%;
  margin-left: -32px;
  position: absolute;
`

const PrevNextNav = () => {
  const { swiper } = useSwiper()
  const currentEpoch = useGetCurrentEpoch()
  const rounds = useGetSortedRounds()

  const handlePrevSlide = () => {
    swiper.slidePrev()
  }

  const handleNextSlide = () => {
    swiper.slideNext()
  }

  const handleSlideToLive = () => {
    const currentEpochIndex = rounds.findIndex((round) => round.epoch === currentEpoch)

    swiper.slideTo(currentEpochIndex - 1)
    swiper.update()
  }

  return (
    <StyledPrevNextNav>
      <IconButton variant="text" scale="sm" onClick={handlePrevSlide}>
        <ArrowBackIcon color="#00ffed" width="24px" />
      </IconButton>
      {/* <Icon onClick={handleSlideToLive}>
        <BunnyCardsIcon width="64px" />
      </Icon> */}
      <img src="/images/butterfly.png" width={60} alt="" style={{margin: '-15px 0 -10px'}} />
      <IconButton variant="text" scale="sm" onClick={handleNextSlide}>
        <ArrowForwardIcon color="#00ffed" width="24px" />
      </IconButton>
    </StyledPrevNextNav>
  )
}

export default PrevNextNav
