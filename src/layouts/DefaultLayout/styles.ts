import styled from 'styled-components'
import { pxToRem } from '../../utils/helpers'

export const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${pxToRem(160)};

  @media screen and (max-width: 1440px) {
    padding: 0 ${pxToRem(16)};
  }
`
