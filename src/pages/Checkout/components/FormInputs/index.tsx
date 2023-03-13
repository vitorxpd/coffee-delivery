import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import * as S from './styles'

export function FormInputs() {
  const { register } = useFormContext()

  return (
    <S.FormInputsContainer>
      <S.FormDescriptionContainer>
        <MapPinLine size={22} />
        <S.FormDescriptionTextContainer>
          <S.DescriptionTitle>Endereço de Entrega</S.DescriptionTitle>
          <S.DescriptionSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </S.DescriptionSubtitle>
        </S.FormDescriptionTextContainer>
      </S.FormDescriptionContainer>
      <S.InputsWrapper>
        <S.Input type="text" placeholder="CEP" {...register('cep')} />

        <S.Input type="text" placeholder="Rua" {...register('rua')} />

        <S.Input
          type="number"
          placeholder="Número"
          {...register('numero', { valueAsNumber: true })}
        />

        <S.Input
          type="text"
          placeholder="Complemento"
          {...register('complemento')}
        />

        <S.Input type="text" placeholder="Bairro" {...register('bairro')} />

        <S.Input type="text" placeholder="Cidade" {...register('cidade')} />

        <S.Input type="text" placeholder="UF" {...register('uf')} />
      </S.InputsWrapper>
    </S.FormInputsContainer>
  )
}
