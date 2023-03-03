import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

import * as S from './styles'

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}
