import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const CardContainer = styled.li`
  width: ${pxToRem(256)};
  height: ${pxToRem(310)};
  padding: 0 ${pxToRem(20)};
  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 32px;

  text-align: center;

  img {
    margin-top: ${pxToRem(-20)};
  }
`

export const TagsContainer = styled.div`
  margin-top: ${pxToRem(16)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(12)};
`

export const TagContent = styled.span`
  padding: ${pxToRem(4)} ${pxToRem(8)};
  font-size: ${pxToRem(10)};
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
`

export const Title = styled.h3`
  margin-top: ${pxToRem(16)};
  font-size: ${pxToRem(20)};
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.p`
  margin-top: ${pxToRem(8)};
  font-size: 14px;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
`

export const BottomContainer = styled.div`
  margin-top: ${pxToRem(33)};
  display: flex;
  align-items: center;
  gap: ${pxToRem(23)};
`

export const PriceContainer = styled.div`
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: baseline;
`

export const PrefixPrice = styled.span`
  font-size: ${pxToRem(14)};
  line-height: 18.2px;

  ::after {
    content: '-';
    opacity: 0;
  }
`

export const Price = styled.h4`
  font-size: ${pxToRem(24)};
  font-weight: 800;
  line-height: 31.2px;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: ${pxToRem(8)};
`

export const Counter = styled.div`
  padding: ${pxToRem(8)};
  display: flex;
  align-items: center;
  gap: ${pxToRem(4)};
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`

export const CounterButton = styled.button`
  width: ${pxToRem(14)};
  height: ${pxToRem(14)};
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CounterInput = styled.input`
  width: 20px;
  border: 0;
  color: ${(props) => props.theme['base-title']};
  text-align: center;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const CartButton = styled.button`
  padding: ${pxToRem(8)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['purple-dark']};
  border: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme['base-card']};
  }
`
