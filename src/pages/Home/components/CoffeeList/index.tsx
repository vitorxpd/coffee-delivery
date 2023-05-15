import { useContext } from 'react'
import { SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../CoffeeCard'
import { useDeviceInfo } from '../../../../hooks/useDeviceInfo'

import * as S from './styles'
import 'swiper/css'
import 'swiper/css/pagination'

export function CoffeeList() {
  const [{ coffees }] = useContext(CoffeesContext)

  const { isMobile } = useDeviceInfo()

  function coffeeLoop() {
    return coffees.map((coffee) => {
      return <CoffeeCard id={coffee.id} key={coffee.id} />
    })
  }

  function coffeeLoopCarousel() {
    return (
      <S.SwiperWrapper modules={[Pagination]} pagination={{ clickable: true }}>
        {coffees.map((coffee) => {
          return (
            <SwiperSlide key={coffee.id}>
              <CoffeeCard id={coffee.id} />
            </SwiperSlide>
          )
        })}
      </S.SwiperWrapper>
    )
  }

  return (
    <S.CoffeeListWrapper>
      <S.ListTitle>Nossos cafés</S.ListTitle>
      <S.ListWrapper>
        {!isMobile ? coffeeLoop() : coffeeLoopCarousel()}
      </S.ListWrapper>
    </S.CoffeeListWrapper>
  )
}
