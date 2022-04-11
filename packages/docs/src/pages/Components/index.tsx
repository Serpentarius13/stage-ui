import React, { useState } from 'react'

import { Flexbox, TextField } from '@stage-ui/core'
import createID from '@stage-ui/system/utils/createID'

import { Outlet } from 'react-router-dom'

import Preview from '@/components/Preview'
import core, { PagesType } from '@/utils/core'

function Components() {
  const { pages } = core
  const [search, setSearch] = useState('')
  const findedPages: PagesType = {}
  Object.keys(pages).forEach((sectionKey) => {
    findedPages[sectionKey] = pages[sectionKey].filter((page) =>
      page.title.toLowerCase().includes(search.toLowerCase()),
    )
  })

  return (
    <Flexbox column>
      <TextField
        size="xl"
        decoration="underline"
        placeholder="Find by name"
        w="100%"
        mb="l"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flexbox column alignItems="flex-start" css={{ gap: '1rem' }}>
        {Object.values(findedPages).map((section) => (
          <Flexbox key={createID()} wrap="wrap" css={{ gap: '1rem' }}>
            {section.map((page) => (
              <Preview key={page.id} page={page} />
            ))}
          </Flexbox>
        ))}
      </Flexbox>
      <Outlet />
    </Flexbox>
  )
}

export default Components