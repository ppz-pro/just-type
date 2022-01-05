import React from 'react'
import './index.styl'

export default function() {
  return <div className = 'jt-options'>
    <div>
      <span>当前词库:</span>
      <span></span>
    </div>
    <div className = 'right'>
      <button>我的词库</button>
      <button>表白墙</button>
      <button>登录</button>
      <a href = 'https://github.com/ppz-pro/just-type' className = 'iconfont icon-github'></a>
    </div>
  </div>
}