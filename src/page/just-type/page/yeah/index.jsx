import React from 'react'
import Core from './core'

export default function() {
  const list = ['I', 'have', 'a', 'dream']
  return <div>
    <Core
      target = {list}
      onFinish = {() => console.log('over')}
      />
  </div>
}