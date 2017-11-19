import React from 'react'
import _ from 'lodash'

import Balloon from './Balloon'

const CLOUD_COLORS = [
  'blue',
  'orange',
  'purple',
  'green',
  'yellow',
  'green',
  'blue',
  'yellow',
  'green',
  'orange',
  'green',
  'blue',
  'yellow',
  'purple',
  'orange',
  'purple',
  'green',
  'yellow',
  'blue',
  'purple',
  'green',
]

export default function Balloons() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      {_.map(CLOUD_COLORS, (color) => <Balloon color={color}/>)}
    </div>
  )
}
