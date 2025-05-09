import React from 'react'

import { Flexbox, Text } from '@stage-ui/core'

import dayjs from 'dayjs'

import CalendarTypes from './types'

const DateGridYear = (props: CalendarTypes.DateGridYearProps) => {
  const { value: self, active, onClick, minValue, maxValue } = props

  const isDisabled =
    minValue.valueOf() > self.valueOf() || maxValue.valueOf() < self.valueOf() || false

  const now = dayjs()
  const yearValue = self.startOf('year').valueOf()
  const nowValue = now.startOf('year').valueOf()
  const activeValue = active?.startOf('year').valueOf()

  const isActive = activeValue === yearValue
  const isCurrent = yearValue === nowValue

  const css = props.classes.monthOrYear({ isActive, isCurrent, isDisabled })

  /**
   * Custom render
   */
  if (props.onYearRender) {
    return (
      <>
        {props.onYearRender({
          now: now.toDate(),
          self: self.toDate(),
          active: active?.toDate(),
          isActive,
          isCurrent,
          isDisabled,
          onClick,
        })}
      </>
    )
  }

  return (
    <Flexbox
      justifyContent="center"
      alignItems="center"
      onClick={() => {
        if (!isDisabled && onClick) {
          onClick()
        }
      }}
      css={css}
      inlineStyle={props.style}
    >
      <Text capitalize size="s">
        {self.format('YYYY')}
      </Text>
    </Flexbox>
  )
}

export default DateGridYear
