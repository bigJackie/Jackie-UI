import hljs from "highlight.js";
import "highlight.js/styles/github.css";
export default {
  bind(el, binding) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
      hljs.highlightElement(block);
    });
  },
};
