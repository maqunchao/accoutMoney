import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    display: block;
    width: 100%;
    height: 44px;
    border: none;
    background: none;
  }
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <Label>
      <span>{props.label}</span>
      {/* 更改为受控组件后, 析构写法也不需要更改 */}
      <input {...rest} />
      {/* <input
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onBlur={props.onBlur}
      /> */}
    </Label>
  );
};

export { Input };
