const { stripScript, stripTemplate, genInlineComponentText } = require("./util");
const md = require("./config");

module.exports = function (source) {
  const content = md.render(source);

  const startTag = "<!--jackie-demo:";
  const startTagLen = startTag.length;
  const endTag = ":jackie-demo-->";
  const endTagLen = endTag.length;

  let componenetsString = "";
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(commentStart + startTagLen, commentEnd);
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `jackie-demo${id}`;
    output.push(`<template slot="component"><${demoComponentName} /></template>`);
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;

    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }

  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑
  let pageScript = "";
  if (componenetsString) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  } else if (content.indexOf("<script>") === 0) {
    // 硬编码，有待改善
    start = content.indexOf("</script>") + "</script>".length;
    pageScript = content.slice(0, start);
  }

  output.push(content.slice(start));

  // 硬编码，有待改善
  let toc = output.join("").substring(output.join("").indexOf("<nav"), output.join("").indexOf("</nav>") + 6);
  let text = output.join("").indexOf("<nav") != -1 ? output.join("").split(toc)[1] : output.join("");
  return `
    <template>
      <section>
        <j-doc>
          <j-row gap="20">
            <j-col cols="19">
              ${text}
            </j-col>
            <j-col cols="5">
              ${toc}
            </j-col>
          </j-row>
        </j-doc>
      </section>
    </template>
    ${pageScript}
  `;
};
