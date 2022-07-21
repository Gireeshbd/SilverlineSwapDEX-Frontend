import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../Layout/Container'
import { PageHeaderProps } from './types'

const Outer = styled(Box)<{ background?: string }>`
  background: rgba(196, 196, 196, 0.21);
  margin-top: 30px;
`

const Inner = styled(Container)`
  padding-top: 25px;
  padding-bottom: 20px;
`

const PageHeader: React.FC<PageHeaderProps> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
