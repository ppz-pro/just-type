import React from 'react'

export class Component extends React.Component {
  constructor(props) {
    super(props)

    this._onMount = []
    this._onUnMount = []
    this._onUpdate = []
  }
  onMount(cb) {
    this._onMount.push(cb)
  }
  onUpdate(cb) {
    this._onUpdate.push(cb)
  }
  onUnmount(cb) {
    this._onUnMount.push(cb)
  }
  componentDidMount() {
    this._onMount.forEach( cb => cb() )
  }
  componentDidUpdate() {
    this._onUpdate.forEach( cb => cb(...arguments) )
  }
  componentWillUnmount() {
    this._onUnMount.forEach( cb => cb() )
  }
}