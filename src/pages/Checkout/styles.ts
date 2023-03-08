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

export const CartItemsContainer = styled.div`
  margin-top: ${pxToRem(15)};
  padding: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
  list-style: none;
`

export const SubmitButton = styled.button`
  padding: ${pxToRem(12)} ${pxToRem(8)};
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 6px;

  font-weight: 700;
  font-size: ${pxToRem(14)};
  line-height: 1.6;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
