const Config = require("markdown-it-chain");
const anchorPlugin = require("markdown-it-anchor");
const tocPlugin = require("markdown-it-toc-done-right");
const slugify = require("transliteration").slugify;
const containers = require("./containers");
const overWriteFenceRule = require("./fence");

const config = new Config();

config.options
  .html(true)
  .end()

  .plugin("anchor")
  .use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#",
    },
  ])
  .end()

  .plugin("toc")
  .use(tocPlugin, [
    {
      level: 2,
      slugify: slugify,
      containerClass: "j-toc",
      listClass: "j-toc-list",
      itemClass: "j-toc-item",
      linkClass: "j-toc-link",
      listType: "ul",
      format: (x, htmlencode) => {
        return `<j-doc-toc-link hash="${slugify(htmlencode(x))}">${htmlencode(x)}</j-doc-toc-link>`;
      },
    },
  ])
  .end()

  .plugin("containers")
  .use(containers)
  .end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
