import { Stamps } from './components/Stamps'
import { MainTitle } from './components/MainTitle'
import { CoffeesList } from './components/CoffeesList'

import * as S from './styles'
import banner from '../../assets/coffee-delivery-banner.svg'

export function Home() {
  return (
    <S.HomeContainer>
      <S.MainArea>
        <S.LeftArea>
          <MainTitle />
          <Stamps />
        </S.LeftArea>
        <img src={banner} alt="" />
      </S.MainArea>
      <CoffeesList />
    </S.HomeContainer>
  )
}
