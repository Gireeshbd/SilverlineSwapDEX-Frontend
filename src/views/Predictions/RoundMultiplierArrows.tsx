import React from 'react'
import { useTheme } from 'styled-components'
import { Svg, SvgProps } from '@pancakeswap/uikit'

interface MultiplierProps extends SvgProps {
  isActive: boolean
}

export const RoundMultiplierDownArrow: React.FC<MultiplierProps> = ({ isActive, ...props }) => {
  const theme = useTheme()
  const fill = theme.colors[isActive ? 'failure' : 'tertiary']

  return (
    isActive?
    <img src='/images/predictions/up-pink.png' alt="bear-arrow" style={{transform:'scaleY(-1)'}} />
    :
    <img src='/images/predictions/up-gray.png' alt="bear-arrow" style={{transform:'scaleY(-1)'}} />
  )
}

export const RoundMultiplierUpArrow: React.FC<MultiplierProps> = ({ isActive, ...props }) => {
  const theme = useTheme()
  const fill = theme.colors[isActive ? 'success' : 'tertiary']

  return (
    isActive? <img src="/images/predictions/up-green.png" alt="bull-arrow" /> : <img src="/images/predictions/up-gray.png" alt="bull-arrow" />
  )
}
