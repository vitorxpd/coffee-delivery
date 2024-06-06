import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../CoffeeCard'

import * as S from './styles'
import { Navigation } from './components/Navigation'

export function CoffeeList() {
  const [{ coffees, isMobile }] = useContext(CoffeesContext)

  return (
    <S.CoffeeListWrapper>
      <S.ListTitle>Nossos cafés</S.ListTitle>
      <S.ListWrapper>
        {isMobile && (
          <Swiper>
            <Navigation />

            {coffees.map((coffee) => (
              <SwiperSlide key={coffee.id}>
                <CoffeeCard id={coffee.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {!isMobile &&
          coffees.map((coffee) => (
            <CoffeeCard id={coffee.id} key={coffee.id} />
          ))}
      </S.ListWrapper>
    </S.CoffeeListWrapper>
  )
}
