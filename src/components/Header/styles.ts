import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const HeaderContainer = styled.header`
  padding: ${pxToRem(32)} 0;
  display: flex;
  justify-content: space-between;
`

export const HeaderRight = styled.div`
  display: flex;
  gap: ${pxToRem(20)};
`

const BaseContainer = styled.div`
  padding: ${pxToRem(8)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
`

export const LocationContainer = styled(BaseContainer)`
  background: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: ${pxToRem(14)};
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartContainer = styled(BaseContainer)`
  position: relative;
  background: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const BadgeContainer = styled.div`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;
  top: ${pxToRem(-8)};
  right: ${pxToRem(-8)};
  position: absolute;

  span {
    font-size: ${pxToRem(12)};
    font-weight: 700;
    color: ${(props) => props.theme.white};
  }
`
