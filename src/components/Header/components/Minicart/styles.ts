import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const MinicartContainer = styled.button`
  padding: ${pxToRem(8)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  position: relative;
  cursor: pointer;

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
`

export const BadgeQuantity = styled.span`
  font-size: ${pxToRem(12)};
  font-weight: 700;
  color: ${(props) => props.theme.white};
`
