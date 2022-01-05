import { Component } from '@ppzp/react'
import React from 'react'
import './index.styl'
import isLegalLetter from './legal-letter'
import sleep from '@ppzp/utils/sleep'
import hooks from '../hooks'

export default class extends Component {
  constructor(props) {
    super(props)
    const self = this

    { // 基础 state
      var state = initState()
      self.onUpdate(prevProps => {
        if(prevProps.target != self.props.target)
          self.setState(initState())
      })
      function initState(){
        return {
          letters: Array.from(self.props.target),
          current: 0 // 当前单词的第 n 个字母
        }
      }
    }

    { // 监听键盘事件
      // 如果使用函数组件，则 handleKeydown 须监听 letter、current 的变化，解绑、绑定
      function handleKeydown({ key }) {
        const { letters, current } = self.state
        console.debug('当前单词', { letters, current })
        if(key != letters[current]) {
          if(isLegalLetter(key)) {
            console.debug(`输入错误，${key}，应该是 ${letters[current]}`)
            shake()
            hooks.onWrongType()
          }
          return
        }
        console.debug('yeah', key)
        hooks.onRightType()
        self.setState({
          current: current + 1
        })
        if(current > letters.length - 2) {
          console.debug('单词完毕')
          hooks.onFinishOne()
          props.next()
        }
      }
      self.onMount(function() {
        document.addEventListener('keydown', handleKeydown)
      })
      self.onUnmount(function() {
        document.removeEventListener('keydown', handleKeydown)
      })
    }

    { // 错误输入的“摇晃动画”
      state.shakeStyle = ''
      let timeid
      var shake = async function() {
        clearTimeout(timeid)
        _shake(false)
        await sleep(1)
        _shake(true)
        timeid = setTimeout(() => _shake(false), 1000)
      }
      function _shake(enable) {
        self.setState({
          illegalClassName: enable ? 'animate__animated animate__headShake' : ''
        })
      }
    }

    this.state = state
  }

  render() {
    const { letters, current, illegalClassName } = this.state
    return <div className = {'core-one ' + illegalClassName}>
      <div>{ letters.map( (letter, index) =>
        <span
          key = {index}
          className = {index < current ? 'typed' : ''}
        >{letter}</span>
      )}</div>
    </div>
  }
}