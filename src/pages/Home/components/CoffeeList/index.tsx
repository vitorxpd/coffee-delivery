import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../CoffeeCard'

import * as S from './styles'

export function CoffeeList() {
  const { coffeesState } = useContext(CoffeesContext)

  const coffees = coffeesState.coffees

  function coffeeLoop() {
    return (
      <S.ListWrapper>
        {coffees.map((coffee) => {
          return <CoffeeCard id={coffee.id} key={coffee.id} />
        })}
      </S.ListWrapper>
    )
  }

  return (
    <S.CoffeeListWrapper>
      <S.ListTitle>Nossos cafés</S.ListTitle>
      {coffeeLoop()}
    </S.CoffeeListWrapper>
  )
}
