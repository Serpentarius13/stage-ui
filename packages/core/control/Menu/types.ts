declare namespace MenuTypes {
  type MenuValue = string | number
  type MenuDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
  type MenuDecoration = 'filled' | 'color' | 'marker' | 'marker-reverse'
  type MenuAlign = 'flex-start' | 'flex-end' | 'stretch' | 'center'
  type MenuShape = 'square' | 'rounded' | 'round'

  interface Context {
    values: Record<string, () => void>
    current?: MenuValue
    controlled?: boolean
    onChange?: (value?: MenuValue) => void
    itemAs?: keyof HTMLElementTagNameMap
  }

  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Value selected by default
     */
    defaultValue?: MenuValue
    /**
     * Current selected value for controlled component
     */
    value?: MenuValue
    /**
     * Simple data items, you can use <Menu.Item/> insted
     */
    data?: React.ReactNode[]
    /**
     * Calls on value change
     */
    onChange?: (value?: MenuValue) => void
    /**
     * Display as column
     * @default false
     */
    column?: boolean
    /**
     * Defines how button look
     * @default filled
     */
    decoration?: MenuDecoration
    /**
     * Flex direction of menu
     * @default row
     */
    direction?: MenuDirection
    /**
     * Shape of each item
     * @default square
     */
    shape?: MenuShape
    /**
     * Sizes of each item
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Flex align
     * @default flex-start
     */
    align?: MenuAlign
    /**
     * Menu Items
     */
    children?: React.ReactNode
    /**
     * HTML element which will be used for an MenuItems
     */
    itemAs?: keyof HTMLElementTagNameMap
  }
  type ClassState = {
    decoration: Props['decoration']
  }
  type Classes = {
    /**
     * Root container
     */
    container: ClassState
    /**
     * Menu item container
     */
    item: ClassState
    /**
     * Group title container
     */
    group: ClassState
    /**
     * Group title text
     */
    groupTitle: ClassState
    /**
     * Submenu container
     */
    subMenu: ClassState
    /**
     * Submenu content view
     */
    subMenuContent: ClassState
    /**
     * Submenu arrow icon
     */
    subMenuArrow: ClassState
    /**
     * Left child at menu item
     */
    leftChild: ClassState
    /**
     * Middle child at menu item
     */
    middleChild: ClassState
    /**
     * Right child at menu item
     */
    rightChild: ClassState
  }
}

export default MenuTypes
