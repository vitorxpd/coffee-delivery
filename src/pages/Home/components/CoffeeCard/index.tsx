import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/priceFormatter'

import * as S from './styles'

interface CoffeeCardProps {
  id: number
}

export function CoffeeCard({ id }: CoffeeCardProps) {
  const [counter, setCounter] = useState<number>(1)

  const { coffees } = useContext(CoffeesContext)

  const coffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

  const coffee = coffees[coffeeIndex]

  const formattedPrice = priceFormatter(coffee.price)

  function handleDecrementQuantity() {
    if (counter >= 1) setCounter((state) => state - 1)
  }

  function handleIncrementQuantity() {
    if (counter < coffee.quantity) setCounter((state) => state + 1)
  }

  return (
    <S.CardContainer>
      <img src={coffee.imageUrl} alt="" />
      <S.TagsContainer>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </S.TagsContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <S.BottomContainer>
        <S.PriceContainer>
          <span>
            {formattedPrice[0]}
            {formattedPrice[1]}
          </span>
          <h3>{formattedPrice.replace('R$', '')}</h3>
        </S.PriceContainer>
        <S.ActionsContainer>
          <S.Counter>
            <button onClick={handleDecrementQuantity}>
              <Minus size={14} />
            </button>
            <input type="number" value={counter} disabled />
            <button onClick={handleIncrementQuantity}>
              <Plus size={14} />
            </button>
          </S.Counter>
          <S.CartButton>
            <ShoppingCart size={22} />
          </S.CartButton>
        </S.ActionsContainer>
      </S.BottomContainer>
    </S.CardContainer>
  )
}
