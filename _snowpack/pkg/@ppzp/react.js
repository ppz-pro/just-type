import { r as react } from '../common/index-ae389540.js';

class Component extends react.Component {
  constructor(props) {
    super(props);

    this._onMount = [];
    this._onUnMount = [];
    this._onUpdate = [];
  }
  onMount(cb) {
    this._onMount.push(cb);
  }
  onUpdate(cb) {
    this._onUpdate.push(cb);
  }
  onUnmount(cb) {
    this._onUnMount.push(cb);
  }
  componentDidMount() {
    this._onMount.forEach( cb => cb() );
  }
  componentDidUpdate() {
    this._onUpdate.forEach( cb => cb(...arguments) );
  }
  componentWillUnmount() {
    this._onUnMount.forEach( cb => cb() );
  }
}

export { Component };
