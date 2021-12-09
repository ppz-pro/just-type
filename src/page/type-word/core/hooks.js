import danger from '@ppzp/utils/danger'

const audio = (function() {
  const el = document.createElement('audio')
  function p(name) {
    el.src = `/audio/${name}.mp3`
    el.play()
  }
  
  return {
    success() {
      p('di')
    },
    error() {
      p('error')
    }
  }
})()

function onWrongType() {
  audio.error()
}

function onRightType() {
  audio.success()
}

function onFinishOne() {

}

function onFinish() {

}

export default {
  onWrongType: danger(onWrongType),
  onRightType: danger(onRightType),
  onFinishOne: danger(onFinishOne),
  onFinish: danger(onFinish)
}