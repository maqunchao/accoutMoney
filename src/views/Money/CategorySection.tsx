import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        //用&. 等于是被包含在li面 替换了  >li .selected
        /* border-bottom: 10px solid #333; */
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%; //使用绝对定位后, 需要给宽度, 否则没有宽度
        left: 0;
      }
    }
  }
`;

type Props = {
  value : '-' | '+';
  onChange:(value:'-' | '+') => void;
}


const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-':'支出','+':'收入' }
  type Keys = keyof typeof categoryMap;
  //const [categoryList] = useState<('-' | '+')[]>(['-', '+']);  //categoryList这个类型进行收缩到 只有-和+
  const [categoryList] = useState<Keys[]>(['-', '+']);  //categoryList这个类型进行收缩到 只有-和+
  
  // const [category, setCategory] = useState("-");
  const category = props.value;


  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(x => {
            return(
              <li
              key={x}
              className={category === x ? "selected" : ""}
              onClick={() => {
                props.onChange(x);
              }}
            >
              {categoryMap[x]}
            </li>
            )
          })
        }
        {/* <li
          className={category === "-" ? "selected" : ""}
          onClick={() => {
            setCategory("-");
          }}
        >
          支出
        </li>
        <li
          className={category === "+" ? "selected" : ""}
          onClick={() => {
            setCategory("+");
          }}
        >
          收入
        </li> */}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
