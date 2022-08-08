const Config = require("markdown-it-chain");
const anchorPlugin = require("markdown-it-anchor");
const slugify = require("transliteration").slugify;
const containers = require("./containers");
const overWriteFenceRule = require("./fence");

const config = new Config();

config.options
  .html(true)
  .end()

  .plugin("anchor")
  .use(require("markdown-it-anchor"), [
    {
      level: 2,
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: "#",
    },
  ])
  .end()

  .plugin("containers")
  .use(containers)
  .end();

// console.log(config.plugins.get("anchor").get("args"));

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
