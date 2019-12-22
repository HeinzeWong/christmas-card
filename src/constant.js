const defaultText = `
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); 
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写贺卡了 */

`;

export default [
  {
    id: "1",
    nickName: "阿翔",
    message: [
      (
        `/*
  * Inspired by http://strml.net/
  * 大家好，我是甜甜圈
  * 许久不见了，甚是想念
  * 临近圣诞，给你们送个贺卡吧！
  */
 ` + defaultText
      ).split(""),
      `/* emmm，这个贺卡好像着实有点太朴素（丑）
      `.split(""),
      `/* 再对 HTML 加点样式吧 */
      .resumeEditor{
        padding: 2em;
      }
      .resumeEditor h2{
        display: inline-block;
        border-bottom: 1px solid;
        margin: 1em 0 .5em;
      }
      .resumeEditor ul,.resumeEditor ol{
        list-style: none;
      }
      .resumeEditor ul> li::before{
        content: '•';
        margin-right: .5em;
      }
      .resumeEditor ol {
        counter-reset: section;
      }
      .resumeEditor ol li::before {
        counter-increment: section;
        content: counters(section, ".") " ";
        margin-right: .5em;
      }
      .resumeEditor blockquote {
        margin: 1em;
        padding: .5em;
        background: #ddd;
      }`.split("")
    ],
    card: `
    Merry Christmas
----
* 送你一瓶酒，祝你早日找到与你共饮一杯的妹子
    `.split("")
  }
];
