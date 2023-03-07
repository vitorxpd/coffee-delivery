import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const TextHighlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
`

export const Title = styled.h1`
  font-size: ${pxToRem(48)};
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme['base-title']};
`

export const Subtitle = styled.p`
  font-size: ${pxToRem(20)};
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`
