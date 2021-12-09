const el = document.createElement('audio')

export default {
  success() {
    el.src = '/audio/di.mp3'
    el.play()
  }
}