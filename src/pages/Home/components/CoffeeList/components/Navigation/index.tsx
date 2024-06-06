import { useSwiper } from 'swiper/react'
import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react'
import * as S from './styles'

export function Navigation() {
  const swiper = useSwiper()

  return (
    <>
      <S.Button orientation="left" onClick={() => swiper.slidePrev()}>
        <CaretCircleLeft size={30} />
      </S.Button>

      <S.Button orientation="right" onClick={() => swiper.slideNext()}>
        <CaretCircleRight size={30} />
      </S.Button>
    </>
  )
}
