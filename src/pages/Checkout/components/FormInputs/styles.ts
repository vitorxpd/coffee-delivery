import styled from 'styled-components'
import { pxToRem } from '../../../../utils/helpers'

export const FormInputsWrapper = styled.div`
  margin-top: ${pxToRem(15)};
  padding: ${pxToRem(40)};
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: ${pxToRem(8)};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const DescriptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(2)};
`

export const DescriptionTitle = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const DescriptionText = styled.span`
  font-size: ${pxToRem(14)};
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`

export const InputsContainer = styled.div`
  margin-top: ${pxToRem(32)};
  display: grid;
  grid-template-areas:
    'cep cep cep'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';

  @media screen and (max-width: 1024px) {
    display: block;
  }
`

export const Input = styled.input`
  padding: ${pxToRem(12)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${pxToRem(14)};
  line-height: 1.3;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:not(:first-child) {
    margin-top: ${pxToRem(16)};
  }

  span {
    font-size: ${pxToRem(12)};
    font-style: italic;
  }

  @media screen and (min-width: 1025px) {
    &[name='cep'] {
      width: ${pxToRem(200)};
      grid-area: cep;
    }

    &[name='rua'] {
      width: 100%;
      grid-area: rua;
    }

    &[name='numero'] {
      width: ${pxToRem(200)};
      margin-right: ${pxToRem(12)};
      grid-area: numero;
    }

    &[name='complemento'] {
      width: 100%;
    }

    &[name='bairro'] {
      width: ${pxToRem(200)};
      margin-right: ${pxToRem(12)};
      grid-area: bairro;
    }

    &[name='cidade'] {
      width: ${pxToRem(276)};
      margin-right: ${pxToRem(12)};
      grid-area: cidade;
    }

    &[name='uf'] {
      width: ${pxToRem(60)};
      grid-area: uf;
    }
  }
`

export const Complement = styled.div`
  margin-top: ${pxToRem(16)};
  grid-area: complemento;
  position: relative;
`

interface FloatTextProps {
  visible: boolean
}

export const FloatText = styled.span<FloatTextProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};

  font-size: ${pxToRem(12)};
  font-style: italic;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};

  right: ${pxToRem(12)};
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
`
