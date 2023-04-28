import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../CoffeeCard'

import * as S from './styles'

export function CoffeeList() {
  const [{ coffees }] = useContext(CoffeesContext)

  return (
    <S.CoffeeListWrapper>
      <S.ListTitle>Nossos cafés</S.ListTitle>
      <S.ListWrapper>
        {coffees.map((coffee) => {
          return <CoffeeCard id={coffee.id} key={coffee.id} />
        })}
      </S.ListWrapper>
    </S.CoffeeListWrapper>
  )
}
