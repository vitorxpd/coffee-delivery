import { useContext, useState } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Counter } from '../../../../components/Counter'
import { ActionTypes } from '../../../../reducers/coffeesReducer'
import { ShoppingCart } from 'phosphor-react'

import { priceFormatter } from '../../../../utils/helpers'

import * as S from './styles'

interface CoffeeCardProps {
  id: number
}

export function CoffeeCard({ id }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const [{ coffees, cartItems }, dispatch] = useContext(CoffeesContext)

  const currentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

  const currentCartItemIndex = cartItems.findIndex((item) => item.id === id)

  const coffee = coffees[currentCoffeeIndex]

  const formattedPrice = priceFormatter(coffee.price)

  function decrementQuantity() {
    if (quantity > 1) setQuantity((state) => state - 1)
  }

  function incrementQuantity() {
    if (quantity < coffee.availableQuantity) setQuantity((state) => state + 1)
  }

  function handleAddCoffeeToCart() {
    currentCartItemIndex === -1
      ? dispatch({
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
    <S.CardWrapper>
      <img src={coffee.imageUrl} alt="" />
      <S.TagsContainer>
        {coffee.tags.map((tag) => {
          return <S.TagContent key={tag}>{tag}</S.TagContent>
        })}
      </S.TagsContainer>
      <S.Title>{coffee.name}</S.Title>
      <S.Description>{coffee.description}</S.Description>
      <S.BottomContainer>
        <S.PriceContainer>
          <S.PricePrefix>
            {formattedPrice[0]}
            {formattedPrice[1]}
          </S.PricePrefix>
          <S.Price>{formattedPrice.replace('R$', '')}</S.Price>
        </S.PriceContainer>
        <S.ActionsContainer>
          <Counter
            quantity={quantity}
            onDecrementQuantity={decrementQuantity}
            onIncrementQuantity={incrementQuantity}
          />
          <S.BuyButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} />
          </S.BuyButton>
        </S.ActionsContainer>
      </S.BottomContainer>
    </S.CardWrapper>
  )
}
