import React, { useEffect, useState } from 'react'
import random from '@ppzp/utils/array/random'
import { useBool } from '@ppzp/react'

import Core from './core'
import './index.styl'
import cet4 from './word-lib/cet4.jt'
import { useAppContext } from '../../entry/app'
import SwitchPart from './switch-part'

const sources = [
  {
    url: cet4,
    title: '大学英语四级'
  }
]

export default function({ setLT }) {
  const { fetch } = useAppContext()

  // 哪一个词库
  const [source, setSource] = useState(sources[0])
  // 全部单词
  const [list, setList] = useState()
  // 当前章节
  const [part, setPart] = useState()
  // 当前章节的单词
  const [typing, setTyping] = useState()
  // 每部分的单词数
  const [sumPerPart, setSum] = useState(20)
  const partSum = list && Math.ceil(list.length / sumPerPart)
  // 显示选词库
  // 显示选章节
  const [showSwitchPart, showSP, hideSP] = useBool()

  // source 变时
  useEffect(async () => {
    setList() // 清空 list
    setPart() // 清空 part
    // 获取全部单词
    const res = await fetch.get(source.url)
    const raw = await res.text()
    // checkWords(raw)
    setList(raw.split('\r\n')) // 设置 list，出发 [list] effect
  }, [source])

  // 选、初始化 词库、章节
  useEffect(() => {
    if(list && part) {
      setLT(
        <div className = 'yeah-lt'>
          <span className = 'source'>{source.title}</span>
          <i className = 'iconfont icon-arrow-right'></i>
          <span className = 'part' onClick = {showSP}>Part {part} of {partSum}</span>
        </div>
      )
      const typing = list.slice((part - 1) * sumPerPart, part * sumPerPart)
      setTyping(random(typing))
    } else {
      setLT()
      if(!part) { // 刚加载好词库，未选中章节
        setPart(1)
      }
    }
  }, [list, part])
  
  return <div className = 'page-yeah jt-no-scroll'>
    <div className = 'main'>{
      typing &&
      <Core
        target = {typing}
        onFinish = {() => console.log('over')}
      />
      || '加载中'
    }</div>
    <SwitchPart
      show = {showSwitchPart} hide = {hideSP}
      partSum = {partSum}
      value = {part}
      onChange = {setPart}
    />
  </div>
}