import {Component} from "../../../../../../_snowpack/pkg/@ppzp/react.js";
import React from "../../../../../../_snowpack/pkg/react.js";
import One from "./one/index.js";
import hooks from "./hooks.js";
export default class extends Component {
  constructor(props) {
    super(props);
    const initState = () => ({
      current: 0,
      words: this.props.target
    });
    this.state = initState();
    this.onUpdate((oldProps) => {
      if (oldProps.target != this.props.target)
        this.setState(initState());
    });
    this.next = () => {
      const {words, current} = this.state;
      this.setState({
        current: this.state.current + 1
      });
      if (current > words.length - 2 && props.onFinish) {
        hooks.onFinish();
        props.onFinish();
      }
    };
  }
  render() {
    const {current, words} = this.state;
    return /* @__PURE__ */ React.createElement("div", {
      className: "core"
    }, words[current] ? /* @__PURE__ */ React.createElement(One, {
      target: words[current],
      next: this.next
    }) : /* @__PURE__ */ React.createElement("div", null, "结束了"));
  }
}
