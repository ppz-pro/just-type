// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".page-yeah {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 800px;\n  height: 100vh;\n  margin: 0 auto;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}