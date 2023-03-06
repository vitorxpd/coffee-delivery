import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

interface CoffeeCardProps {
  id: number
}

export function CoffeeCard({ id }: CoffeeCardProps) {
  const [amount, setAmount] = useState<number>(1)

  const { coffeesState, addCoffeeToCart } = useContext(CoffeesContext)

  const { coffees, cartItems } = coffeesState

  const currentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

  const currentCartItemIndex = cartItems.findIndex((item) => item.id === id)

  const coffee = coffees[currentCoffeeIndex]

  const formattedPrice = priceFormatter(coffee.price)

  function handleDecrementQuantity() {
    if (amount >= 1) setAmount((state) => state - 1)
  }

  function handleIncrementQuantity() {
    if (amount < coffee.quantity) setAmount((state) => state + 1)
  }

  function handleAddCoffeeToCart() {
    currentCartItemIndex === -1
      ? addCoffeeToCart(coffee.id, amount)
      : alert('O produto já foi adicionado!')
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
            <input type="number" value={amount} disabled />
            <button onClick={handleIncrementQuantity}>
              <Plus size={14} />
            </button>
          </S.Counter>
          <S.CartButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} />
          </S.CartButton>
        </S.ActionsContainer>
      </S.BottomContainer>
    </S.CardContainer>
  )
}
