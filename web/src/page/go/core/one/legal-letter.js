const list = Array.from('abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ')
export default function(target) {
  return list.includes(target)
}