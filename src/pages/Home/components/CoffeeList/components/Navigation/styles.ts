import styled, { css } from 'styled-components'

interface ButtonProps {
  orientation: 'right' | 'left'
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;

  ${(props) =>
    props.orientation === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 30px;
        `};

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
