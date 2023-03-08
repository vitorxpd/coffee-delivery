import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { Stamps } from './components/Stamps'
import { MainTitle } from './components/MainTitle'
import { CoffeeCard } from './components/CoffeeCard'

import * as S from './styles'
import banner from '../../assets/coffee-delivery-banner.svg'

export function Home() {
  const { coffeesState } = useContext(CoffeesContext)

  const coffees = coffeesState.coffees

  return (
    <S.HomeContainer>
      <S.MainArea>
        <S.LeftArea>
          <MainTitle />
          <Stamps />
        </S.LeftArea>
        <img src={banner} alt="" />
      </S.MainArea>
      <S.CoffeesListContainer>
        <S.ListTitle>Nossos cafés</S.ListTitle>
        <S.ListWrapper>
          {coffees.map((coffee) => {
            return <CoffeeCard id={coffee.id} key={coffee.id} />
          })}
        </S.ListWrapper>
      </S.CoffeesListContainer>
    </S.HomeContainer>
  )
}
