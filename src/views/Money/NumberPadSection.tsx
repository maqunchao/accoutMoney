import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./NumberPadSection/Wrapper";
import { genertateOutput } from "./NumberPadSection/genertateOutput";

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOK?: () => void;
};

const NumberPadSection: React.FC<Props> = (props) => {
  // const [output, _setOutput] = useState("0");
  // const output = props.value.toString();
  const [output, _setoutput] = useState(props.value.toString());

  //统一处理输入框数字长度问题, 并且长度为0时, 重置为0
  const setOutput = (output: string) => {
    let newoutput: string;
    if (output.length > 16) {
      newoutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newoutput = "0";
    } else {
      newoutput = output;
    }
    _setoutput(newoutput);
    props.onChange(parseFloat(newoutput));
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    //as作为一个指定类型
    // console.log("e", (e.target as HTMLButtonElement).textContent);
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === "OK") {
      if (props.onOK) {
        props.onOK();
      }
      return;
    }
    if ("0123456789.".split("").concat(["删除", "清空"]).indexOf(text) >= 0) {
      setOutput(genertateOutput(text, output));
    }
  };

  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
