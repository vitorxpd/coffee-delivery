import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const CartListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
  list-style: none;
`
