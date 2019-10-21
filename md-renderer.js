
const marked = require("marked");
const _ = require('lodash');

module.exports = function() {
  const renderer = new marked.Renderer();

  renderer.code = ((fallback) => function(code, language) {
    if (language.match(/^mermaid/g)) {
      return `<div class="${language}">${_.escape(code)}</div>`;
    }

    return fallback.apply(this, arguments);
  })(renderer.code);

  return renderer;
};
