import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const CartTotalizerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const BaseText = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`

export const TotalItemsText = styled(BaseText)`
  font-size: ${pxToRem(14)};
`

export const TotalItemsPrice = styled(BaseText)``

export const ShippingText = styled(BaseText)`
  font-size: ${pxToRem(14)};
`

export const ShippingPrice = styled(BaseText)``

export const Highlight = styled.span`
  font-size: ${pxToRem(20)};
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.3;
`
