import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const HeaderWrapper = styled.header`
  padding: ${pxToRem(32)} 0;
  display: flex;
  justify-content: space-between;
`

export const HeaderRight = styled.div`
  display: flex;
  gap: ${pxToRem(20)};
`
