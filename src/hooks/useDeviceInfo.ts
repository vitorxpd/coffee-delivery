import { useEffect, useState } from 'react'

type DeviceInfoType = 'mobile' | 'laptop' | 'desktop' | undefined

interface DeviceInfo {
  type: DeviceInfoType
  screenSize: number
  isMobile: boolean
}

export default function useDeviceInfo() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: undefined,
    screenSize: window.innerWidth,
    isMobile: false,
  })

  const sizes = {
    mobile: 1024,
    laptop: 1440,
    desktop: 1920,
  }

  const { screenSize } = deviceInfo

  const { desktop, laptop, mobile } = sizes

  function setScreenSize() {
    setDeviceInfo((state) => {
      return {
        ...state,
        screenSize: window.innerWidth,
      }
    })
  }

  function setType(device: DeviceInfoType) {
    setDeviceInfo((state) => {
      return {
        ...state,
        type: device,
      }
    })
  }

  function setIsMobile(condition: boolean) {
    setDeviceInfo((state) => {
      return {
        ...state,
        isMobile: condition,
      }
    })
  }

  useEffect(() => {
    setScreenSize()
  }, [])

  useEffect(() => {
    if (screenSize <= mobile) {
      setType('mobile')
      setIsMobile(true)
    }

    if (screenSize > mobile && screenSize <= laptop) setType('laptop')

    if (screenSize > laptop || screenSize >= desktop) setType('desktop')
  }, [screenSize, mobile, laptop, desktop])

  return deviceInfo
}
