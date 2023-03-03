import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import * as S from './styles'
import banner from '../../assets/coffee-delivery-banner.svg'

export function Home() {
  return (
    <S.HomeContainer>
      <S.LeftContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <S.StampsContainer>
          <S.StampItem variant="yellow-dark" customSize={true}>
            <div>
              <ShoppingCart size={16} />
            </div>
            <span>Compra simples e segura</span>
          </S.StampItem>
          <S.StampItem variant="gray">
            <div>
              <Package size={16} />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </S.StampItem>
          <S.StampItem variant="yellow" customSize={true}>
            <div>
              <Timer size={16} />
            </div>
            <span>Entrega rápida e rastreada</span>
          </S.StampItem>
          <S.StampItem variant="purple">
            <div>
              <Coffee size={16} />
            </div>
            <span>O café chega fresquinho até você</span>
          </S.StampItem>
        </S.StampsContainer>
      </S.LeftContainer>
      <img src={banner} alt="" />
    </S.HomeContainer>
  )
}
