import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: #42008E;

  .girl-img {
    position: absolute;
    left: 10%;
    width: 15%;
    top: 10%;

    ${ ({theme}) => theme.mediaQueries.xxl } {
      position: absolute;
      left: calc(50% - 600px);
      width: 226px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .text {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;

    ${ ({theme}) => theme.mediaQueries.xl } {
      font-size: 20px;
    }
  }
`

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <BgWrapper>
        <img className="girl-img" src="/images/home/start.png" alt="" />
      </BgWrapper>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="white">
          {t('Start in seconds.')}
        </Heading>
        <Text textAlign="center" color="white" className='text' >
          {t('Connect your crypto wallet to start using the app in seconds.')}
        </Text>
        <Text mb="24px" bold color="white" className='text' >
          {t('No registration needed.')}
        </Text>

        <Link external color='white' href="https://docs.pancakeswap.finance/">
          {t('Learn how to start')}
        </Link>
        {!account && <ConnectWalletButton className='sl-sky-glow' variant='secondary' mt="24px" width='174px' fontWeight='400' />}
      </Wrapper>
    </>
  )
}

export default Footer
