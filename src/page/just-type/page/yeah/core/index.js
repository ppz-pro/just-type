import { Component } from '@ppzp/react'
import React from 'react'
import One from './one'
import hooks from './hooks'

export default class extends Component {
  constructor(props) {
    super(props)

    const initState = () => ({
      current: 0, // 当前单词列表里第 n 个单词
      words: this.props.target
    })
    this.state = initState()
    this.onUpdate(oldProps => {
      if(oldProps.target != this.props.target)
        this.setState(initState())
    })

    this.next = () => {
      const { words, current } = this.state
      this.setState({
        current: this.state.current + 1
      })
      if(current > words.length - 2 && props.onFinish) {
        hooks.onFinish()
        props.onFinish()
      }
    }
  }
  render() {
    const { current, words } = this.state
    return <div className = 'core'>
      {words[current]
        ? <One
            target = {words[current]}
            next = {this.next}
            />
        : <div>结束了</div>
      }
    </div>
  }
}