import { Component } from '../../../lib/react'
import React from 'react'
import './one.styl'
import isLegalLetter from './legal-letter'
import sleep from '@ppzp/utils/sleep'

export default class extends Component {
  constructor(props) {
    super(props)
    const self = this

    { // state
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
            catchIllegal()
          }
          return
        }
        console.debug('yeah', key)
        self.setState({
          current: current + 1
        })
        if(current > letters.length - 2) {
          console.debug('单词完毕')
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
      state.illegalClassName = ''
      let illegalTimeid
      var catchIllegal = () => {
        clearTimeout(illegalTimeid)
  
        enableShake()
        illegalTimeid = setTimeout(() => shake(false), 1000)
      }
      async function enableShake() {
        shake(false)
        await sleep(1)
        shake(true)
      }
      function shake(enable) {
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