import React, { useState } from "react";
import { Button, Card } from "antd";
import { css } from "@emotion/react";
import style, { MyButton1, MyButton2 } from "./components/style";

export default function Test(props: any) {
  const [color, setColor] = useState("red");
  // 引入局部样式文件
  return (
    <div css={style}>
      <div>
        <p className="test1">
          <span>Test</span>
          <span>测试</span>
          <span>测试</span>
        </p>
        <MyButton1
          color={color}
          onClick={() =>
            setColor(
              "#" + `${Math.floor(Math.random() * 16).toString(16)}`.repeat(3)
            )
          }
        >
          测试
        </MyButton1>
        <Card title="test3" className="test3">
          <MyButton2>只是一个测试！</MyButton2>
          <Button>只是一个测试！</Button>
          <Button>只是一个测试！</Button>
        </Card>
        <Card
          title="test4"
          css={css`
            background: yellow;
          `}
        ></Card>
      </div>
    </div>
  );
}
