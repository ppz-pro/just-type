export default function(name) {
  const el = document.createElement('audio')
  return function() {
    el.src = `/just-type/audio/${name}.mp3`
    el.play()
  }
}