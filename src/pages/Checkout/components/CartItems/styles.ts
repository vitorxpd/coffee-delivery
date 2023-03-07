import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const CartItemsContainer = styled.div`
  margin-top: ${pxToRem(15)};
  padding: ${pxToRem(40)};
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const CoffeeList = styled.ul`
  padding: ${pxToRem(8)};
  list-style: none;
`

export const CoffeeItem = styled.li`
  display: flex;
  gap: ${pxToRem(20)};

  img {
    width: ${pxToRem(64)};
    height: ${pxToRem(64)};
  }
`

export const MainCoffeeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CoffeeName = styled.span`
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeePrice = styled.strong`
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`

export const ActionsContainer = styled.div``
