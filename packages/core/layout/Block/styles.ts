import containerDecorations from '@stage-ui/core/utils/containerDecorations'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  return {
    container: (state, variant) => [
      containerDecorations(props, theme),
      {
        position: 'relative',
        overflow: props.overflow,
      },
    ],
  }
}

export default createClasses
