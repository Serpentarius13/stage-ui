/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useMemo } from 'react'
import useTheme from '@stage-ui/system/hooks/useTheme'
import { breakpointIndex } from '@stage-ui/system/utils/breakpoint'

export const useBreakpoint = <T>(values: T[]): T => {
  const theme = useTheme()

  let index = breakpointIndex(theme)

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [_, forceReload] = useState<number>(index)

  const calcState = () => {
    const idx = breakpointIndex(theme)
    if (idx !== index) {
      forceReload(idx)
      index = idx
    }
  }

  useEffect(() => {
    window.addEventListener('resize', calcState)
    window.addEventListener('orientationchange', calcState)
    return () => {
      window.removeEventListener('resize', calcState)
      window.removeEventListener('orientationchange', calcState)
    }
  }, [])

  return typeof values[index] !== 'undefined' ? values[index] : values[values.length - 1]
}
