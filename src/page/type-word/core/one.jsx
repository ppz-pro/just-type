import { Component } from '../../../lib/react'
import React from 'react'
import './one.styl'

export default class extends Component {
  constructor(props) {
    super(props)
    
    const initState = () => ({
      letters: Array.from(this.props.target),
      current: 0 // 当前单词的第 n 个字母
    })
    this.state = initState()
    this.onUpdate( (prevProps) => {
      if(prevProps.target != this.props.target)
        this.setState(initState())
    })

    // 如果使用函数组件，则 handleKeydown 须监听 letter、current 的变化，解绑、绑定
    const handleKeydown = ({ key }) => {
      const { letters, current } = this.state
      console.debug('当前单词', { letters, current })
      if(key != letters[current]) {
        console.debug(`输入错误，${key}，应该是 ${letters[current]}`)
        return
      }
      console.debug('yeah', key)
      this.setState({
        current: current + 1
      })
      if(current > letters.length - 2) {
        console.debug('单词完毕')
        props.next()
      }
    }
    this.onMount(function() {
      document.addEventListener('keydown', handleKeydown)
    })
    this.onUnmount(function() {
      document.removeEventListener('keydown', handleKeydown)
    })
  }

  render() {
    const { letters, current } = this.state
    return <div>
      <div>{ letters.map( (letter, index) =>
        <span
          key = {index}
          className = {index < current ? 'typed' : ''}
        >{letter}</span>
      )}</div>
    </div>
  }
}