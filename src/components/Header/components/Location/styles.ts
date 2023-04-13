import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const LocationWrapper = styled.div`
  padding: ${pxToRem(8)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const LocationText = styled.span`
  font-size: ${pxToRem(14)};
  font-weight: 400;
  line-height: 1.3;
  color: ${(props) => props.theme['purple-dark']};
`
