import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Counter } from '../../../../components/Counter'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'
import { ActionTypes } from '../../../../reducers/coffeesReducer'

interface CoffeeCardProps {
  id: number
}

export function CoffeeCard({ id }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const { coffeesState, coffeesDispatch } = useContext(CoffeesContext)

  const { coffees, cartItems } = coffeesState

  const currentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

  const currentCartItemIndex = cartItems.findIndex((item) => item.id === id)

  const coffee = coffees[currentCoffeeIndex]

  const formattedPrice = priceFormatter(coffee.price)

  function decrementQuantity() {
    if (quantity > 1) setQuantity((state) => state - 1)
  }

  function incrementQuantity() {
    if (quantity < coffee.quantity) setQuantity((state) => state + 1)
  }

  function handleAddCoffeeToCart() {
    currentCartItemIndex === -1
      ? coffeesDispatch({
          type: ActionTypes.ADD_COFFEE,
          payload: {
            id: coffee.id,
            price: coffee.price,
            quantity,
          },
        })
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
            quantity={quantity}
            onDecrementQuantity={decrementQuantity}
            onIncrementQuantity={incrementQuantity}
          />
          <S.CartButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} />
          </S.CartButton>
        </S.ActionsContainer>
      </S.BottomContainer>
    </S.CardContainer>
  )
}
