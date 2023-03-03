import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const StampsContainer = styled.div`
  margin-top: ${pxToRem(66)};
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const VARIANT_COLORS = {
  gray: 'base-text',
  purple: 'purple',
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
} as const

interface StampItemProps {
  variant: keyof typeof VARIANT_COLORS
  customSize?: boolean
}

export const StampItem = styled.div<StampItemProps>`
  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};

  ${(props) =>
    props.customSize &&
    css`
      width: ${pxToRem(251)};
    `};

  div {
    padding: ${pxToRem(8)};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme[VARIANT_COLORS[props.variant]]};
    border-radius: 50%;

    svg {
      color: ${(props) => props.theme.background};
    }
  }

  span {
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
