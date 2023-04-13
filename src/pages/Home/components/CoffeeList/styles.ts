import styled from 'styled-components'
import { pxToRem } from '../../../../utils/pxToRem'

export const CoffeeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListTitle = styled.h2`
  margin-top: ${pxToRem(32)};
  font-size: ${pxToRem(32)};
  font-weight: 800;
  line-height: 1.3;
`

export const ListWrapper = styled.ul`
  margin-top: ${pxToRem(54)};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${pxToRem(32)};
`
