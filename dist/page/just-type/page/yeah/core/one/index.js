import {Component} from "../../../../../../../_snowpack/pkg/@ppzp/react.js";
import React from "../../../../../../../_snowpack/pkg/react.js";
import "./index.css.proxy.js";
import isLegalLetter from "./legal-letter.js";
import sleep from "../../../../../../../_snowpack/pkg/@ppzp/utils/sleep.js";
import hooks from "../hooks.js";
export default class extends Component {
  constructor(props) {
    super(props);
    const self = this;
    {
      let initState = function() {
        return {
          letters: Array.from(self.props.target),
          current: 0
        };
      };
      var state = initState();
      self.onUpdate((prevProps) => {
        if (prevProps.target != self.props.target)
          self.setState(initState());
      });
    }
    {
      let handleKeydown = function({key}) {
        const {letters, current} = self.state;
        console.debug("当前单词", {letters, current});
        if (key != letters[current]) {
          if (isLegalLetter(key)) {
            console.debug(`输入错误，${key}，应该是 ${letters[current]}`);
            shake();
            hooks.onWrongType();
          }
          return;
        }
        console.debug("yeah", key);
        hooks.onRightType();
        self.setState({
          current: current + 1
        });
        if (current > letters.length - 2) {
          console.debug("单词完毕");
          hooks.onFinishOne();
          props.next();
        }
      };
      self.onMount(function() {
        document.addEventListener("keydown", handleKeydown);
      });
      self.onUnmount(function() {
        document.removeEventListener("keydown", handleKeydown);
      });
    }
    {
      let _shake = function(enable) {
        self.setState({
          illegalClassName: enable ? "animate__animated animate__headShake" : ""
        });
      };
      state.shakeStyle = "";
      let timeid;
      var shake = async function() {
        clearTimeout(timeid);
        _shake(false);
        await sleep(1);
        _shake(true);
        timeid = setTimeout(() => _shake(false), 1e3);
      };
    }
    this.state = state;
  }
  render() {
    const {letters, current, illegalClassName} = this.state;
    return /* @__PURE__ */ React.createElement("div", {
      className: "core-one " + illegalClassName
    }, /* @__PURE__ */ React.createElement("div", null, letters.map((letter, index) => /* @__PURE__ */ React.createElement("span", {
      key: index,
      className: index < current ? "typed" : ""
    }, letter))));
  }
}
