export default function(name) {
  const el = document.createElement('audio')
  el.src = `/just-type/audio/${name}.mp3`
  return function() {
    el.play()
  }
}
