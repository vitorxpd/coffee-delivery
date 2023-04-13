import { Stamps } from './components/Stamps'
import { MainTitle } from './components/MainTitle'
import { CoffeeList } from './components/CoffeeList'

import * as S from './styles'
import banner from '../../assets/coffee-delivery-banner.svg'

export function Home() {
  return (
    <S.HomeWrapper>
      <S.MainArea>
        <S.Content>
          <MainTitle />
          <Stamps />
        </S.Content>
        <img src={banner} alt="" />
      </S.MainArea>
      <CoffeeList />
    </S.HomeWrapper>
  )
}
