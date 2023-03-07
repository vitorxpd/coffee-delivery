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

const BaseRegisterContainerElement = styled.div`
  padding: ${pxToRem(40)};
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const InputsContainer = styled(BaseRegisterContainerElement)`
  margin-top: ${pxToRem(15)};
`

export const FormDescriptionContainer = styled.div`
  display: flex;
  gap: ${pxToRem(8)};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormDescriptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(2)};
`

export const DescriptionTitle = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const DescriptionSubtitle = styled.span`
  font-size: ${pxToRem(14)};
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`

export const InputsWrapper = styled.div`
  margin-top: ${pxToRem(32)};
  display: grid;
  grid-template-areas:
    'cep cep cep'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';
`

export const Label = styled.label`
  padding: ${pxToRem(12)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${pxToRem(14)};
  line-height: 1.3;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: ${pxToRem(16)};
  }

  span {
    font-size: ${pxToRem(12)};
    font-style: italic;
  }

  &[for='cep'] {
    width: ${pxToRem(200)};
    grid-area: cep;
  }

  &[for='rua'] {
    width: 100%;
    grid-area: rua;
  }

  &[for='numero'] {
    width: ${pxToRem(200)};
    margin-right: ${pxToRem(12)};
    grid-area: numero;
  }

  &[for='complemento'] {
    width: 100%;
    grid-area: complemento;
  }

  &[for='bairro'] {
    width: ${pxToRem(200)};
    margin-right: ${pxToRem(12)};
    grid-area: bairro;
  }

  &[for='cidade'] {
    width: ${pxToRem(276)};
    margin-right: ${pxToRem(12)};
    grid-area: cidade;
  }

  &[for='uf'] {
    width: ${pxToRem(60)};
    grid-area: uf;
  }
`

export const PaymentContainer = styled(BaseRegisterContainerElement)`
  margin-top: ${pxToRem(12)};
`

export const CheckoutItemsContainer = styled.div`
  width: ${pxToRem(448)};
`
