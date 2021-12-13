export default function(name) {
  const el = document.createElement('audio')
  return function() {
    el.src = `/audio/${name}.mp3`
    el.play()
  }
}