import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const BunnyWrapper = styled.div`
  width: 100%;
  // animation: ${flyingAnim} 3.5s ease-in-out infinite;

  img {
    ${ ({theme}) => theme.mediaQueries.xxl } {
      width: 105%;
      max-width: 105%;
      transform: scale(1.2);
    }
  }
`

const Wrapper = styled.div`
  padding-top: 40px;

  .hero-bg {
    position: absolute;
    left: 0;
    top: -50px;
  }

  .hero-heading {
    font-size: 30px;
    font-family: 'Roboto';
    line-height: 1.3;
    letter-spacing: 0.5px;

    ${ ({ theme }) => theme.mediaQueries.xl } {
      font-size: 45px;
      letter-spacing: 2px;
    }
  }

  .hero-subheading {
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.5px;
    margin-bottom: 35px;
    font-family: 'Poppins', sans-serif;

    ${ ({ theme }) => theme.mediaQueries.xl } {
      font-size: 18px;
      letter-spacing: 0;
      margin-bottom: 30px;
    }
  }
`;

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <Wrapper>
      {/* <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper> */}
      <img src="/images/hero-bg.png" className='hero-bg' alt="" />
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '170px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" >
          <Heading scale="xxl" className='hero-heading' color="text" mb="24px" style={{textTransform:'uppercase'}} >
            {t('The moon is made of butterflies.')}
          </Heading>
          <Heading scale="md" className='hero-subheading' mb="24px" >
            {t('Trade, earn, and win crypto on the most secured Decentralized Crypto Trading Platform.')}
          </Heading>
          <Flex>
            {!account && <ConnectWalletButton className="sl-sky-glow" mr="30px" variant='secondary' />}
            <Link to="/swap">
              <Button variant={!account ? 'secondary' : 'primary'} className={!account? 'sl-pink-glow' : ''} style={{minWidth:'150px'}} >{t('Trade Now')}</Button>
            </Link>
          </Flex>
        </Flex>
        <Flex
          height={[null, null, null, '100%']}
          width={['100%', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <img src="/images/home/hero.png" alt="" />
          </BunnyWrapper>
          {/* <StarsWrapper>
            <CompositeImage {...starsImage} />
          </StarsWrapper> */}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default Hero
