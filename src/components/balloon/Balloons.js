import React from 'react'
import Balloon from './Balloon'

export default function Balloons() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Balloon color={'blue'}/>
      <Balloon color={'red'}/>
      <Balloon color={'purple'}/>
      <Balloon color={'green'}/>
      <Balloon color={'red'}/>
      <Balloon color={'green'}/>
      <Balloon color={'blue'}/>
      <Balloon color={'purple'}/>
      <Balloon color={'green'}/>
      <Balloon color={'red'}/>
      <Balloon color={'green'}/>
      <Balloon color={'blue'}/>
      <Balloon color={'red'}/>
      <Balloon color={'purple'}/>
    </div>
  )
}
