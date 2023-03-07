import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const PaymentContainer = styled.div`
  margin-top: ${pxToRem(12)};
  padding: ${pxToRem(40)};
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
