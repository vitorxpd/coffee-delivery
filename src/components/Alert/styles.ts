import styled from 'styled-components'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { pxToRem } from '../../utils/helpers'

export const Content = styled(AlertDialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(10)};
  background-color: ${(props) => props.theme.white};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${pxToRem(300)};
  padding: ${pxToRem(25)};
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

export const Title = styled(AlertDialog.Title)`
  font-size: ${pxToRem(20)};
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled(AlertDialog.Description)`
  font-size: ${pxToRem(14)};
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
`

export const Cancel = styled(AlertDialog.Cancel)`
  all: unset;
  padding: ${pxToRem(6)} ${pxToRem(10)};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-title']};
  cursor: pointer;
  font-weight: bold;
`
