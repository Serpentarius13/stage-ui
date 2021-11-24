import MeterTypes from '../types'

declare namespace MeterThumbTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Value for controlled compoents
     */
    value: MeterTypes.Props['value']
    /**
     * Thumb color
     */
    color?: MeterTypes.Props['color']
    /**
     * Enabled prgoress animation
     * @default false
     */
    loading?: MeterTypes.Props['loading']
    shape?: MeterTypes.Props['shape']
    size?: MeterTypes.Props['size']
  }

  type Classes = {
    /**
     * Thumb view
     */
    container: MeterTypes.Classes['thumb']
  }
}

export default MeterThumbTypes
