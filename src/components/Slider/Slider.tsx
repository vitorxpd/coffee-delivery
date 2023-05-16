import { PropsWithChildren } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'

interface SliderProps {
  settings: SwiperProps
}

export function Slider({ settings, children }: PropsWithChildren<SliderProps>) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  )
}
