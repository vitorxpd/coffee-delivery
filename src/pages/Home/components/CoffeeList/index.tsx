import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../CoffeeCard'
import { useDeviceInfo } from '../../../../hooks/useDeviceInfo'
import { Slide, Slider, SliderProps } from '../../../../components/Slider'

import * as S from './styles'

export function CoffeeList() {
  const [{ coffees }] = useContext(CoffeesContext)

  const { isMobile } = useDeviceInfo()

  const settings: SliderProps = {
    pagination: {
      clickable: true,
    },
  }

  function coffeeLoopCarrousel() {
    return (
      <Slider settings={settings}>
        {coffees.map((coffee) => {
          return (
            <Slide key={coffee.id}>
              <CoffeeCard id={coffee.id} />
            </Slide>
          )
        })}
      </Slider>
    )
  }

  function coffeeLoop() {
    return coffees.map((coffee) => {
      return <CoffeeCard id={coffee.id} key={coffee.id} />
    })
  }

  return (
    <S.CoffeeListWrapper>
      <S.ListTitle>Nossos cafés</S.ListTitle>
      <S.ListWrapper>
        {isMobile ? coffeeLoopCarrousel() : coffeeLoop()}
      </S.ListWrapper>
    </S.CoffeeListWrapper>
  )
}
