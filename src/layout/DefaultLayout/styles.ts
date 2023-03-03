import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${pxToRem(160)};
`
