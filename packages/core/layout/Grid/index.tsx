import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Grid: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events, styleProps } = useSystem('Grid', props, styles)

  return jsx(
    'div',
    {
      ...attributes,
      ...events,
      ref,
      css: [
        classes.container({
          decoration: props.decoration,
        }),
        styleProps.all,
      ],
    },
    props.children,
  )
}

export default forwardRef(Grid)
