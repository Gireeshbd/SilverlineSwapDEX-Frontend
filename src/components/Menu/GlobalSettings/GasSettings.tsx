import React from 'react'
import { Flex, Button, Text } from '@pancakeswap/uikit'
import QuestionHelper from 'components/QuestionHelper'
import { useTranslation } from 'contexts/Localization'
import { GAS_PRICE_GWEI, GAS_PRICE } from 'state/user/hooks/helpers'
import { useGasPriceManager } from 'state/user/hooks'

const GasSettings = () => {
  const { t } = useTranslation()
  const [gasPrice, setGasPrice] = useGasPriceManager()

  return (
    <Flex flexDirection="column">
      <Flex mb="12px" alignItems="center">
        <Text>{t('Default Transaction Speed (GWEI)')}</Text>
        <QuestionHelper
          text={t(
            'Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees',
          )}
          placement="top-start"
          ml="4px"
        />
      </Flex>
      <Flex flexWrap="wrap" style={{gap:10}} justifyContent='space-between' >
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.default)
          }}
          variant={gasPrice === GAS_PRICE_GWEI.default ? 'primary_round' : 'tertiary'}
          style={{minWidth:'29%'}}
          p='4px'
        >
          {/* {t('Standard (%gasPrice%)', { gasPrice: GAS_PRICE.default })} */}
          Standard
        </Button>
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.fast)
          }}
          variant={gasPrice === GAS_PRICE_GWEI.fast ? 'primary_round' : 'tertiary'}
          style={{minWidth:'29%'}}
          p='4px'
        >
          {/* {t('Fast (%gasPrice%)', { gasPrice: GAS_PRICE.fast })} */}
          Fast
        </Button>
        <Button
          mr="4px"
          mt="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.instant)
          }}
          variant={gasPrice === GAS_PRICE_GWEI.instant ? 'primary_round' : 'tertiary'}
          style={{minWidth:'29%'}}
          p='4px'
        >
          {/* {t('Instant (%gasPrice%)', { gasPrice: GAS_PRICE.instant })} */}
          Instant
        </Button>
      </Flex>
    </Flex>
  )
}

export default GasSettings
