import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import * as S from './styles'

export function FormInputs() {
  const { register, watch } = useFormContext()

  const watchComplement = watch('complemento')

  return (
    <S.FormInputsWrapper>
      <S.DescriptionContainer>
        <MapPinLine size={22} />
        <S.DescriptionTextContainer>
          <S.DescriptionTitle>Endereço de Entrega</S.DescriptionTitle>
          <S.DescriptionText>
            Informe o endereço onde deseja receber seu pedido
          </S.DescriptionText>
        </S.DescriptionTextContainer>
      </S.DescriptionContainer>
      <S.InputsContainer>
        <S.Input type="text" placeholder="CEP" {...register('cep')} />

        <S.Input type="text" placeholder="Rua" {...register('rua')} />

        <S.Input
          type="number"
          placeholder="Número"
          {...register('numero', { valueAsNumber: true })}
        />

        <S.Complement>
          <S.Input
            type="text"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <S.FloatText visible={!watchComplement}>Opcional</S.FloatText>
        </S.Complement>

        <S.Input type="text" placeholder="Bairro" {...register('bairro')} />

        <S.Input type="text" placeholder="Cidade" {...register('cidade')} />

        <S.Input type="text" placeholder="UF" {...register('uf')} />
      </S.InputsContainer>
    </S.FormInputsWrapper>
  )
}
