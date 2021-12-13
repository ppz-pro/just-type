import danger from '../../../../../../_snowpack/pkg/@ppzp/utils/danger.js'
import confetti from '../../../../../../_snowpack/pkg/canvas-confetti.js'
import audio from '../../../../../common/audio.js'

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