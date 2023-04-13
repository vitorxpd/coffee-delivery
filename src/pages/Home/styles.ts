import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const HomeWrapper = styled.main`
  padding-top: ${pxToRem(94)};
  padding-bottom: ${pxToRem(157)};
`

export const MainArea = styled.div`
  padding-bottom: ${pxToRem(108)};
  display: flex;
  gap: ${pxToRem(56)};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
