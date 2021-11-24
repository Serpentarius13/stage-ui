import containerDecorations from '@stage-ui/core/utils/containerDecorations'
import Types from './types'

// TODO: borderBottomStyle type incorrect
// @ts-ignore
const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  return {
    container: [
      containerDecorations({ decoration: 'surface', ...props }, theme),
      {
        width: '100%',
        borderCollapse: 'inherit',
        borderSpacing: 0,
      },
    ],
    row: (state) => [
      {
        transition: 'background 0.25s',
      },
      state.dragOver && {
        background: theme.color.primary.alpha(0.25).string(),
      },
    ],
    headCell: (state) => [
      {
        textAlign: 'left',
        padding: '1.25rem 1rem',
        fontWeight: 500,
      },
      state.sort && {
        cursor: 'pointer',
        userSelect: 'none',
        ':hover': {
          color: theme.color.primary.rgb().string(),
        },
      },
    ],
    rowCell: [
      {
        padding: '1rem',
        borderTopWidth: theme.assets.border.width,
        borderTopStyle: theme.assets.border.style,
        borderTopColor: theme.assets.border.color,
      },
    ],
    rowCellAnchor: [
      {
        cursor: 'move',
        width: '1.25rem',
        height: '0.375rem',
        margin: '0.125rem',
        borderTop: `0.125rem solid ${theme.color.light.rgb().string()}`,
        borderBottom: `0.125rem solid ${theme.color.light.rgb().string()}`,
      },
    ],
    expandContainer: [
      {
        padding: '1rem',
      },
    ],
    footer: [
      {
        padding: '1.25rem 1rem',
        borderTopWidth: theme.assets.border.width,
        borderTopStyle: theme.assets.border.style,
        borderTopColor: theme.assets.border.color,
      },
    ],
  }
}

export default styles
