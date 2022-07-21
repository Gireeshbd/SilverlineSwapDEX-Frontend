import React, { ReactElement } from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import styled, { DefaultTheme } from 'styled-components'

type Status = 'expired' | 'live' | 'next' | 'soon' | 'canceled' | 'calculating'

interface CardHeaderProps {
  status: Status
  title: string
  epoch: number
  icon?: ReactElement
}

const HEADER_HEIGHT = '50px'

// Used to get the gradient for the card border, which depends on the header color to create the illusion
// that header is overlapping the 1px card border.
// 'live' is not included into the switch case because it has isActive border style
export const getBorderBackground = (theme: DefaultTheme, status: Status) => {
  const gradientStopPoint = `calc(${HEADER_HEIGHT} + 1px)`
  switch (status) {
    case 'calculating':
      return `linear-gradient(transparent ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint}), ${theme.colors.gradients.cardHeader}`
    case 'canceled':
      return `linear-gradient(${theme.colors.warning} ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint})`
    case 'next':
      return `linear-gradient(${theme.colors.secondary} ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint})`
    case 'expired':
    case 'soon':
    default:
      return theme.colors.cardBorder
  }
}

const getBackgroundColor = (theme: DefaultTheme, status: Status) => {
  switch (status) {
    case 'calculating':
      return theme.colors.gradients.cardHeader
    case 'live':
      return theme.colors.text
    case 'canceled':
      return theme.colors.warning
    case 'next':
      return '#963fff'
    case 'expired':
    case 'soon':
    default:
      return '#aeaeae'
  }
}

type TextColor = 'textDisabled' | 'white' | 'secondary' | 'text' | 'primary' | 'textSubtle'
type FallbackColor = 'text' | 'primary' | 'textSubtle'

const getTextColorByStatus = (status: Status, fallback: FallbackColor): TextColor => {
  switch (status) {
    case 'expired':
      return 'secondary'
    case 'next':
      return 'white'
    case 'live':
      return 'primary'
    case 'canceled':
    case 'calculating':
      return 'text'
    default:
      return fallback
  }
}

const StyledCardHeader = styled.div<{ status: Status }>`
  align-items: center;
  background: ${({ theme, status }) => getBackgroundColor(theme, status)};
  display: flex;
  justify-content: space-between;
  height: ${HEADER_HEIGHT};
  padding: ${({ status }) => (status === 'live' ? '16px' : '8px')};
`

const Round = styled.div`
  justify-self: center;
`

const CardHeader: React.FC<CardHeaderProps> = ({ status, title, epoch, icon }) => {
  const textColor = getTextColorByStatus(status, 'text')
  const isLive = status === 'live'

  return (
    <StyledCardHeader status={status}>
      <Flex alignItems="center">
        {icon}
        <Text color={textColor} bold textTransform={(isLive || status === 'next') ? 'uppercase' : 'capitalize'} fontSize="12px" lineHeight="21px">
          {title}
        </Text>
      </Flex>
      <Round>
        <Text fontSize={isLive ? '12px' : '12px'} color={getTextColorByStatus(status, 'textSubtle')} textAlign="center">
          {`#${epoch}`}
        </Text>
      </Round>
    </StyledCardHeader>
  )
}

export default CardHeader
