// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".core-one {\n  font-size: 4rem;\n  font-family: monospace;\n  font-weight: 1000;\n}\n.core-one .typed {\n  color: #008000;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}