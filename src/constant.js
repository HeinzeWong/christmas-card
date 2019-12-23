const defaultText1 = `
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，来点背景 */
html {
  background: rgb(0,43,54);
  color: rgb(222,222,222); 
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 给代码上个色 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
/* 加点 3D 效果鸭 */
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
/* 接下来我给自己准备一个贺卡编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我要开始写贺卡了 */

`;

const defaultText2 = `/* emmm，言简意赅，又不失意境，就这些吧。。
不过，这个贺卡好像着实有点太朴素（丑）
`;

const defaultText3 = `/* 那就加点样式吧 */
.resumeEditor {
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.resumeEditor h3{
  font-family: exmouth;
  font-size: 5em;
  font-weight: 500;
}
.resumeEditor h4{
  font-family: liukai;
  font-size: 2em;
  text-align: center;
}
.resumeEditor hr{
  margin: 0 4vw;
  border: 1px solid #fff;
}

.resumeEditor {
  border: 1px solid #000;
  background-color: #943038;
  background-image: radial-gradient(#c75f4e, #943038);
  box-shadow: 0 0 30px #000;
  color: #fff;
}



/*
 * 大功告成了，希望你会喜欢(๑¯∀¯๑)
 */
`


export default [
  {
    id: "5d289e6d-5a68-135f-ae69-888fbda06316",
    nickName: "露西",
    message: [
      `/*
  * Inspired by 「会动的简历」
  * hi，露西
  * 好久不见
  * 临近圣诞，给你用代码画个贺卡吧
  */
 ` + defaultText1,
      defaultText2,
      defaultText3
    ],
    card: `
### Merry  Christmas
------------------
#### 心之所愿，无所不成
    `
  },
  {
    id: "4fa95321-4089-6699-97a4-7a56f5a27225",
    nickName: "阿翔",
    message: [
      `/*
  * Inspired by 「会动的简历」
  * hi，阿翔
  * 很久没给你写过圣诞贺卡了
  * 今年又是没有练字的一年。。
  * 临近圣诞，也来不及练，就给你用代码画个贺卡吧
  */
 ` + defaultText1,
      defaultText2,
      defaultText3
    ],
    card: `
    Merry  Christmas
----
* 心之所愿，无所不成
    `
  },
  {
    id: "2b99a873-2826-53ba-2177-a5fbfe9163f",
    nickName: "浴巾",
    message: [
      `/*
  * Inspired by 「会动的简历」
  * hi，浴巾
  * 今年抽到给你送礼物，遂精挑细选了一波
  * 买单的时候发现，居然还没到150的金额下限=。=
  * 预算不够，心意补救吧
  * 就给你用代码画个贺卡吧
  */
 ` + defaultText1,
      defaultText2,
      defaultText3
    ],
    card: `
    Merry  Christmas
----
* 心之所愿，无所不成
    `
  },
  {
    id: "a9b00b85-ea32-a980-1cc9-9b4cb898055f",
    nickName: "吉姐",
    message: [
      `/*
  * Inspired by 「会动的简历」
  * hi，吉姐
  * 很久没在游戏上见到大家了，甚是想念
  * 临近圣诞，就给你们画个贺卡吧
  */
 ` + defaultText1,
      defaultText2,
      defaultText3
    ],
    card: `
    Merry  Christmas
----
* 心之所愿，无所不成
    `
  },
  {
    id: "aaa23af3-a7b9-b4c5-d98e-be7d999664d9",
    nickName: "南辉",
    message: [
      `/*
  * Inspired by 「会动的简历」
  * hi，南辉
  * 入职以来，承蒙关照
  * 以后估计也会继续叨扰你
  * 无以为报
  * 临近圣诞，就给你画个贺卡吧
  */
 ` + defaultText1,
      defaultText2,
      defaultText3
    ],
    card: `
### Merry  Christmas
------------------
#### 心之所愿，无所不成
    `
  }
];
