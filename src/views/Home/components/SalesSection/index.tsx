import React from 'react'
import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'

const InnerSection = styled(Flex)`
  ${({theme})=> theme.mediaQueries.xxl} {
    transform: translateX(-3vw);
  }
`

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return (
    <InnerSection flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '4px']}
          mr={[null, null, null, !reverse && '4px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading text={headingTranslatedText} />
          <Text color="textSubtle" mb="24px" className='font-poppins' fontSize='20px' >
            {bodyTranslatedText}
          </Text>
          <Flex>
            <Button className='sl-sky-glow' variant='secondary' mr="35px" width={156} >
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="card" fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
            <Button className='sl-pink-glow' variant='secondary' width={156} >
              {secondaryButton.external?  (
                <Link external href={secondaryButton.to}>
                  <Text color="#fff" fontSize="16px">
                    {t(secondaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={secondaryButton.to}>
                  <Text color="#fff" fontSize="16px">
                    {t(secondaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <CompositeImage {...images} />
        </Flex>
      </Flex>
    </InnerSection>
  )
}

export default SalesSection
