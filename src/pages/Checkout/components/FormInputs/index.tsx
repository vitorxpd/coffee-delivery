import { MapPinLine } from 'phosphor-react'

import * as S from './styles'

export function FormInputs() {
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
        <S.Label htmlFor="cep">CEP</S.Label>
        <input type="text" id="cep" hidden />

        <S.Label htmlFor="rua">Rua</S.Label>
        <input type="text" id="rua" hidden />

        <S.Label htmlFor="numero">Número</S.Label>
        <input type="text" id="numero" hidden />

        <S.Label htmlFor="complemento">
          Complemento <span>Opcional</span>
        </S.Label>
        <input type="text" id="complemento" hidden />

        <S.Label htmlFor="bairro">Bairro</S.Label>
        <input type="text" id="bairro" hidden />

        <S.Label htmlFor="cidade">Cidade</S.Label>
        <input type="text" id="cidade" hidden />

        <S.Label htmlFor="city">UF</S.Label>
        <input type="text" id="uf" hidden />
      </S.InputsWrapper>
    </S.FormInputsContainer>
  )
}
