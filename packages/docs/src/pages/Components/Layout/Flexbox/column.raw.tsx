import React from 'react'
import { Flexbox, Block } from '@stage-ui/core'

export default () => {
  return (
    <Flexbox column>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Alice
      </Block>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Bob
      </Block>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Baker
      </Block>
    </Flexbox>
  )
}
