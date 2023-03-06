import { Stamps } from './components/Stamps'
import { CoffeeCard } from './components/CoffeeCard'

import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

import * as S from './styles'
import banner from '../../assets/coffee-delivery-banner.svg'

export function Home() {
  const { coffeesState } = useContext(CoffeesContext)

  const coffees = coffeesState.coffees

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
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} id={coffee.id} />
          })}
        </ul>
      </S.CoffeesListContainer>
    </S.HomeContainer>
  )
}
