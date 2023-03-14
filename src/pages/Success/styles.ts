import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const SuccessWrapper = styled.main`
  padding-top: ${pxToRem(80)};
`

export const MainTitle = styled.h1`
  font-size: ${pxToRem(32)};
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.p`
  margin-top: ${pxToRem(4)};
  font-size: ${pxToRem(20)};
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const InfoContent = styled.div`
  margin-top: ${pxToRem(40)};
  display: flex;
  justify-content: space-between;
`

export const BoxWithBorder = styled.div`
  width: ${pxToRem(526)};
  padding: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(32)};
  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};
  position: relative;

  &::before {
    content: '';
    background: linear-gradient(
      102.89deg,
      ${(props) => props.theme.yellow} 2.61%,
      ${(props) => props.theme.purple} 98.76%
    );
    border-radius: 7px 37px;
    inset: -1px;
    position: absolute;
    z-index: -1;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`

const VARIANT_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
} as const

interface IconContainerProps {
  variant: keyof typeof VARIANT_COLORS
}

export const IconContainer = styled.div<IconContainerProps>`
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme[VARIANT_COLORS[props.variant]]};
  border-radius: 1000px;

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: block;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  strong {
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }
`
