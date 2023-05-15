import { Stamps } from './components/Stamps'
import { CoffeeList } from './components/CoffeeList'

import * as S from './styles'
import banner from '../../assets/banner.svg'

export function Home() {
  return (
    <S.HomeWrapper>
      <S.MainArea>
        <S.Content>
          <S.TitleContainer>
            <S.Title>
              Encontre o café perfeito para qualquer hora do dia
            </S.Title>
            <S.TextContent>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.TextContent>
          </S.TitleContainer>
          <Stamps />
        </S.Content>
        <img src={banner} alt="" />
      </S.MainArea>
      <CoffeeList />
    </S.HomeWrapper>
  )
}
