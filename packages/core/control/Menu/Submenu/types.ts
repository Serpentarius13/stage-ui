declare namespace SubmenuTypes {
  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
    /**
     * Title for menu item
     */
    title?: React.ReactNode
    /**
     * Turn submenu off
     * @default false
     */
    disabled?: boolean
    /**
     * Indent at left size
     */
    indent?: string
    /**
     * Open state, for controlled component
     */
    open?: boolean
    /**
     * Default open state
     */
    defaultOpen?: boolean
    /**
     * Submenu items
     */
    children?: React.ReactNode
    /**
     * Left child at submenu view
     */
    leftChild?: React.ReactNode
    /**
     * Left child at submenu view
     */
    rightChild?: React.ReactNode
  }

  type Classes = {
    /**
     * Root view
     */
    container: void
  }
}

export default SubmenuTypes
