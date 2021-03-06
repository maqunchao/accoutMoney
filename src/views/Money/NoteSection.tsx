import { Input } from "components/Input";
import React, { ChangeEventHandler, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  /* > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background: none;
    }
  } */
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

//react的onChange会在输入每个字符的时候,就触发
//HTML的onChange在你鼠标移走的时候触发, 早于onBulr

const NoteSection: React.FC<Props> = (props) => {
  // const [note, setNote] = useState("");
  const note = props.value;

  //给input添加vaule和onChange方法变成受控组件,
  // value={note}
  // onChange={(e) => setNote(e.target.value)}

  //非受控组件 defaultVaule, onbulr,在失去焦点时候获取值
  const getNote = (value: string) => {
    console.log(value);
    console.log("ref", refInput.current?.value);
    props.onChange(value);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };

  const refInput = useRef<HTMLInputElement>(null);

  return (
    <Wrapper>
      <Input
        label="备注"
        type="text"
        value={note}
        onChange={onChange}
        placeholder="请填写备注"
      />
      {/* <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          defaultValue={note}
          onBlur={(e) => {
            getNote(e.target.value);
          }}
          ref={refInput}
        />
      </label> */}
    </Wrapper>
  );
};

export { NoteSection };
