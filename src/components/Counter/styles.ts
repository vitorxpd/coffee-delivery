import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const CounterWrapper = styled.div`
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
`
