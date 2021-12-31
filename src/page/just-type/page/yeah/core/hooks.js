import danger from '@ppzp/utils/danger'
import confetti from 'canvas-confetti'
import audio from '../../../../../common/audio'

import errorMP3 from './audio/error.mp3'
const onWrongType = audio(errorMP3)

const onRightType = () => {}

import diMP3 from './audio/success.mp3'
const onFinishOne = audio(diMP3)

import applauseMP3 from './audio/applause.mp3'
const applause = audio(applauseMP3)
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