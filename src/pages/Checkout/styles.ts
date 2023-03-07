import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const CheckoutContainer = styled.main`
  padding-top: ${pxToRem(40)};

  form {
    display: flex;
    gap: ${pxToRem(32)};
  }
`

export const FormTitle = styled.h2`
  font-size: ${pxToRem(18)};
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const RegisterContainer = styled.div`
  width: ${pxToRem(640)};
`

export const CheckoutItemsContainer = styled.div`
  width: ${pxToRem(448)};
`
