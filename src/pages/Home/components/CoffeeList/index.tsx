import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../../../../components/CoffeeCard'

import * as S from './styles'

export function CoffeeList() {
  const { coffeesState } = useContext(CoffeesContext)

  const coffees = coffeesState.coffees

  return (
    <S.CoffeesListContainer>
      <S.ListTitle>Nossos cafés</S.ListTitle>
      <S.ListWrapper>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} id={coffee.id} />
        })}
      </S.ListWrapper>
    </S.CoffeesListContainer>
  )
}
