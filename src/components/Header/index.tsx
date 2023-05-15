import { Link } from 'react-router-dom'
import { Location } from './components/Location'
import { Minicart } from './components/Minicart'
import { useDeviceInfo } from '../../hooks/useDeviceInfo'

import * as S from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  const { isMobile } = useDeviceInfo()

  return (
    <S.HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <S.HeaderRight>
        {!isMobile && <Location />}
        <Minicart />
      </S.HeaderRight>
    </S.HeaderWrapper>
  )
}
