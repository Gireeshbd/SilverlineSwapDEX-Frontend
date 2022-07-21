import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Box, CardProps } from '@pancakeswap/uikit'

const StyledCardBorder = styled(Card)<{ background: string; rotation?: string }>`
  border-radius: 24px;
  background: linear-gradient(180deg, #CB9DFF 0.6%, rgba(0, 0, 0, 0) 100%);
  padding: 2px;
  width: 33%;
`;

const StyledCard = styled(Card)`
  padding: 1px 1px 4px 1px;
  box-sizing: border-box;
  text-align: center;
  background: linear-gradient(180deg, #54248A 0%, #644096 37.29%, #6D5198 44.79%, #603C92 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  width: 100%;
`

const IconWrapper = styled(Box)<{ rotation?: string }>`
  position: absolute;
  top: 24px;
  right: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  background?: string
  borderColor?: string
  rotation?: string
}

const IconCard: React.FC<IconCardProps> = ({ icon, background, borderColor, rotation, children, ...props }) => {
  return (
    <StyledCardBorder background={background} borderBackground={borderColor} rotation={rotation} {...props}>
      <StyledCard>
        <IconWrapper rotation={rotation}>{icon}</IconWrapper>
        {children}
      </StyledCard>
    </StyledCardBorder>
  )
}

export default IconCard
