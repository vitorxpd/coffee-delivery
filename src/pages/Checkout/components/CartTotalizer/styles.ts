import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const CartTotalizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const BaseContent = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`

export const TextContent = styled(BaseContent)`
  font-size: ${pxToRem(14)};
`

export const PriceContent = styled(BaseContent)``

export const HighlightContent = styled.span`
  font-size: ${pxToRem(20)};
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`
