// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".just-type-head {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background: #000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2rem;\n  color: #fff;\n  box-shadow: 0 0 10px rgba(0,0,0,0.6);\n}\n.just-type-head .app-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1.6rem;\n  font-weight: 666;\n  padding: 1.2rem;\n  padding-right: 1.25rem;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background: #008000;\n  box-shadow: 0 0 10px rgba(0,0,0,0.6);\n}\n.just-type-head .just-type-tool-bar {\n  flex: 1;\n  line-height: size2;\n  font-size: 0.8rem;\n  text-align: right;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}