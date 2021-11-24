import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  return {
    container: {
      willChange: 'scroll-position',
      position: 'fixed',
      zIndex: 300,
    },
  }
}
export default createClasses
