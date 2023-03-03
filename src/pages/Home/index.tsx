import { Stamps } from './components/Stamps'
import { CoffeeCard } from './components/CoffeeCard'

import * as S from './styles'
import banner from '../../assets/coffee-delivery-banner.svg'

export function Home() {
  return (
    <S.HomeContainer>
      <S.MainArea>
        <S.LeftArea>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Stamps />
        </S.LeftArea>
        <img src={banner} alt="" />
      </S.MainArea>
      <S.CoffeesListContainer>
        <h2>Nossos cafés</h2>
        <ul>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </ul>
      </S.CoffeesListContainer>
    </S.HomeContainer>
  )
}
