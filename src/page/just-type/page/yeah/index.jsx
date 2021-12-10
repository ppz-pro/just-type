import React from 'react'
import Core from './core'
import './index.styl'

export default function() {
  const list = ['I', 'have', 'a', 'dream']
  return <div className = 'page-yeah'>
    <div className = 'main'>
      <Core
        target = {list}
        onFinish = {() => console.log('over')}
        />
    </div>
  </div>
}