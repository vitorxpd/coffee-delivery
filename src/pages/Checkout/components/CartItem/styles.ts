import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const CartItem = styled.li`
  padding: ${pxToRem(8)} ${pxToRem(4)} ${pxToRem(24)} ${pxToRem(4)};
  display: flex;
  gap: ${pxToRem(20)};
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: ${pxToRem(64)};
    height: ${pxToRem(64)};
  }
`

export const MainCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  flex: 1;
`

export const CoffeeName = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeePrice = styled.strong`
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
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

export const RemoveButton = styled.button`
  padding: ${pxToRem(8)};
  display: flex;
  align-items: center;
  gap: ${pxToRem(4)};
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const RemoveButtonText = styled.span`
  font-size: ${pxToRem(12)};
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
`
