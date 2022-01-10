import React, { useEffect, useState } from 'react'
import Modal from '@ppzp/react/modal'
import times from '@ppzp/utils/times'

export default
function SwitchPart({
  show, hide,
  value, partSum, onChange
}) {
  // 一页显示多少 item
  const pageSum = 20 // item1 ~ item20
  // range 个数
  const rangeSum = 3

  // range 的层级数
  const levels = function() {
    let levels = 0
    let lastIndex = pageSum // range 中的最后一个 index
    while(lastIndex < partSum) {
      lastIndex *= rangeSum
      levels ++
    }
    return levels
  }()

  // 当前层级 rangeSize 大的 level 大
  const [cLevel, setCLevel] = useState()
  // 一个 range 里，有多少 item
  const rangeSize = pageSum * (rangeSum ** (cLevel - 1))

  const [startIndex, setStart, undoStart] = useStackState()

  // 弹出时...
  useEffect(() => {
    if(show) {
      setCLevel(levels)
      setStart(1)
    }
  }, [show])

  const [selectedRange, setSelected] = useState()

  return <Modal show = {show} hide = {hide} className = 'switch-part center'>
    <div className = 'ranges'>
      {times(rangeSum, index =>
        <div key = {index}
          className = {`item ${selectedRange == index && cLevel == 1 ? 'selected':''}`}
          onClick = {() => {
            if(cLevel == 1) { // 选中 range
              setSelected(index)
            } else if (cLevel > 1) { // 展开 range
              setCLevel(cLevel - 1)
              setStart(startIndex + rangeSize * index)
            } else {
              console.error({ cLevel })
              throw Error('cLevel 值不对劲')
            }
          }}
        >
          Part {startIndex + rangeSize * index}..{startIndex + rangeSize * (index + 1) - 1
        }</div>
      )}
      <i
        className = 'iconfont icon-undo'
        onClick = {() => {
          if(cLevel == levels) {
            console.debug('最大 level')
            return
          }
          setCLevel(cLevel + 1)
          undoStart()
        }}
      ></i>
    </div>
    <div className = 'parts'>{
      times(pageSum, index =>
        <div key = {index}
          className = {`item ${value == index + startIndex ? 'selected':''}`}
          onClick = {() => {
            onChange(index + startIndex)
            hide()
          }}
        >
          Part {startIndex + index}
        </div>
      )
    }</div>
  </Modal>
}

function useStackState(value) {
  const [state, set] = useState(value)
  const [stack] = useState([value])
  return [
    state,
    function(value) {
      stack.push(value)
      set(value)
    },
    function() {
      stack.pop()
      set(stack[stack.length - 1])
    }
  ]
}