import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const HomeContainer = styled.main`
  padding-top: ${pxToRem(94)};
  padding-bottom: ${pxToRem(157)};
`

export const MainArea = styled.div`
  padding-bottom: ${pxToRem(108)};
  display: flex;
  gap: ${pxToRem(56)};
`

export const LeftArea = styled.div`
  h1 {
    font-size: ${pxToRem(48)};
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: ${pxToRem(16)};
    font-size: ${pxToRem(20)};
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeesListContainer = styled.div`
  h2 {
    margin-top: ${pxToRem(32)};
    font-size: ${pxToRem(32)};
    font-weight: 800;
    line-height: 1.3;
  }

  ul {
    margin-top: ${pxToRem(54)};
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`
