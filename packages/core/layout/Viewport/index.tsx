import * as themes from '@stage-ui/core/themes'
import { Provider, useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react'
import MountArea from './MountArea'
import styles from './styles'
import Types from './types'

const Viewport: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { wrapper, cache } = props
  const theme =
    (typeof props.theme === 'string' ? themes[props.theme] : props.theme) || themes.light

  const viewportRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => viewportRef.current as HTMLDivElement)

  const EmotionCache = {
    key: 'stage',
    container: (viewportRef && viewportRef.current) || undefined,
    ...cache,
  }

  const { classes, attributes, events, styleProps } = useSystem('Viewport', props, styles, {
    theme,
  })

  const Content = (
    <Provider
      theme={theme}
      global={!wrapper ? [classes.container, styleProps.all] : undefined}
      cache={EmotionCache}
    >
      <>
        {props.children}
        <MountArea />
      </>
    </Provider>
  )

  return wrapper ? (
    <div {...attributes} {...events} ref={viewportRef} css={[classes.container, styleProps.all]}>
      {Content}
    </div>
  ) : (
    Content
  )
}

export default forwardRef(Viewport)
