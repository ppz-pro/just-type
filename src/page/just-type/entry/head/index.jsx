import React from 'react'
import './index.styl'
import ToolBar from './tool-bar'

export default function() {
  return <div className = 'just-type-head'>
    <div className = 'app-title'>Just Type</div>
    <div className = 'head-border'>
      <div className = 'left' />
      <div className = 'left' />
    </div>
    <ToolBar />
  </div>
}