import danger from '@ppzp/utils/danger'
import confetti from 'canvas-confetti'
import audio from '../../../../../common/audio'

const onWrongType = audio('error')

const onRightType = () => {}

const onFinishOne = audio('di')

const applause = audio('applause')
const onFinish = function() {
  applause()
  confetti({
    angle: 60,
    origin: { x: 0 }
  })
  confetti({
    angle: 120,
    origin: { x: 1 }
  })
}

export default {
  onWrongType: danger(onWrongType),
  onRightType: danger(onRightType),
  onFinishOne: danger(onFinishOne),
  onFinish: danger(onFinish)
}