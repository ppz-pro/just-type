export default function(url) {
  const el = document.createElement('audio')
  return function() {
    el.src = url
    el.play()
  }
}