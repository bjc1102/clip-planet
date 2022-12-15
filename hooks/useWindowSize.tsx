import React from 'react'
import { debounce } from 'lodash'
import { loadWindow } from '@/utils/window'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: loadWindow()?.width,
    height: loadWindow()?.height,
  })

  const handleWindowSize = debounce(
    () =>
      setWindowSize(() => {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      }),
    100
  )

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSize)
    return () => window.removeEventListener('resize', handleWindowSize)
  }, [])

  return { windowSize }
}

export default useWindowSize
