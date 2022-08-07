const mdContainer = require("markdown-it-container");

module.exports = md => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const content = tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
        return `<j-doc-container>
        ${description ? `<div>${md.render(description)}</div>` : ""}
        <!--jackie-demo: ${content}:jackie-demo-->
        `;
      }
      return "</j-doc-container>";
    },
  });

  md.use(mdContainer, "block", {
    validate(params) {
      return params.trim().match(/^block\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^block\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const content = tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
        return `<j-doc-container>
        ${description ? `<div>${md.render(description)}</div>` : ""}
        <!--jackie-demo: ${content}:jackie-demo-->
        `;
      }
      return "</j-doc-container>";
    },
  });
  md.use(mdContainer, "tip");
  md.use(mdContainer, "warning");
};
