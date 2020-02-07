import WhaleTypes from '@flow-ui/whale/types'

export type LayoutDecoration =
    'surface'
    | 'minorShadow'
    | 'mediumShadow'
    | 'majorShadow'
    | 'neumorphism'

type Props = WhaleTypes.AllProps<HTMLDivElement, {}> & { decoration?: LayoutDecoration }

const applyLayoutDecoration = (props: Props, theme: WhaleTypes.Theme) => {

    switch (props.decoration) {
        case 'surface': return {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
        }
        case 'minorShadow': return {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.short
        }
        case 'mediumShadow': return {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.default
        }
        case 'majorShadow': return {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.long
        }
        case 'neumorphism':
            const isDark = theme.color.background.get('lab.l') < 70
            return {
                background: theme.color.background.css(),
                borderRadius: theme.radius.default,
                boxShadow: `0.5rem 0.5rem 1rem ${theme.color.background.darken(isDark ? 0.8 : 0.4).css()},
                            -0.5rem -0.5rem 1rem ${theme.color.background.brighten(isDark ? 0.4 : 0.8).css()}`
            }
    }

    return void 0
}

export default applyLayoutDecoration