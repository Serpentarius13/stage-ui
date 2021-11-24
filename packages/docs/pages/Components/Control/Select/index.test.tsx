import React from 'react'
import * as Core from '@stage-ui/core'

const sizes = ['xl', 'l', 'm', 's', 'xs'] as any
const textFieldDecoration = ['filled', 'none', 'outline', 'underline'] as any

export default () => (
  <Core.Block>
    <Core.Flexbox>
      {textFieldDecoration.map((decoration) => (
        <div key={decoration}>
          {sizes.map((size) => (
            <div key={size}>
              <Core.Select
                label="Select"
                placeholder="Placeholder"
                size={size}
                decoration={decoration}
                options={[{ text: 'X', value: 'X' }]}
              />
            </div>
          ))}
        </div>
      ))}
    </Core.Flexbox>
  </Core.Block>
)
