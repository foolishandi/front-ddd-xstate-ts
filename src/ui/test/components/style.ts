import { css, keyframes } from "@emotion/react";
import { Button } from "antd";
import styled from "@emotion/styled";

// 定义全局样式
// 在根目录下的index.less修改

// 主题色
// 建议用全局状态stylesAtom

// 动态样式组件，会形成独立的classname
// 对象的写法
export const MyButton1 = styled.button(
  // 默认样式
  {
    outline: "none",
    border: "none",
    width: 200,
    color: "#fff",
  },
  // 动态样式部分
  (props) => ({
    background: props.color || "red",
  })
);

// 模板字符串写法
// export const MyButton1 = styled.button`
//   outline: none;
//   border: none;
//   width: 200px;
//   color: #fff;
//   background: ${(props) => props.color || "red"};
// `;

// 父元素.test3也被应用局部样式，则会覆盖样式，以父为主
// 需要在父样式内引入MyButton2进行更改
export const MyButton2 = styled(Button)`
  width: 250px;
  font-size: ${(props) => props.size || "10px"};
  /* 不生效，会被父类样式覆盖  */
  background-color: lightGray;
`;

// 定义动画
const move = keyframes`
  0% {
    background: skyblue;
    left: 0;
    top: 0;
  }
  100%{
    background: tomato;
    left: 600px;
    top: 300px;
  }
`;

export const box = css`
  width: 100px;
  height: 100px;
  position: absolute;
  animation: ${move} 2s ease infinite alternate;
`;

// 静态主要样式表,会形成独立的classname,以及对应的css文件
export default css`
  .test1 {
    color: red;
  }
  .test3 {
    margin-top: 30px;
    /* 处理组件内元素 */
    .ant-card-head-title {
      color: red;
    }
    .ant-btn {
      background-color: rgba(0, 0, 0, 0.02);
      margin-right: 5px;
    }
    /* 设置子组件样式 */
    ${MyButton2} {
      background-color: lightGray;
    }
  }
`;
