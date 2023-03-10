import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Counter } from '../../../../components/Counter'
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

  function changeDecrementAmount() {
    if (amount > 1) setAmount((state) => state - 1)
  }

  function changeIncrementAmount() {
    if (amount < coffee.quantity) setAmount((state) => state + 1)
  }

  function handleAddCoffeeToCart() {
    currentCartItemIndex === -1
      ? addCoffeeToCart(coffee.id, coffee.price, amount)
      : alert('O produto já foi adicionado!')
  }

  return (
    <S.CardContainer>
      <img src={coffee.imageUrl} alt="" />
      <S.TagsContainer>
        {coffee.tags.map((tag) => {
          return <S.TagContent key={tag}>{tag}</S.TagContent>
        })}
      </S.TagsContainer>
      <S.Title>{coffee.name}</S.Title>
      <S.Subtitle>{coffee.description}</S.Subtitle>
      <S.BottomContainer>
        <S.PriceContainer>
          <S.PrefixPrice>
            {formattedPrice[0]}
            {formattedPrice[1]}
          </S.PrefixPrice>
          <S.Price>{formattedPrice.replace('R$', '')}</S.Price>
        </S.PriceContainer>
        <S.ActionsContainer>
          <Counter
            amount={amount}
            onChangeDecrementAmount={changeDecrementAmount}
            onChangeIncrementAmount={changeIncrementAmount}
          />
          <S.CartButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} />
          </S.CartButton>
        </S.ActionsContainer>
      </S.BottomContainer>
    </S.CardContainer>
  )
}
