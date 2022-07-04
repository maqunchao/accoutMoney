import styled from "styled-components";

const CategorySection = styled.section`
  > ul {
    display:flex;
    background: #c4c4c4;
    > li {
      width:50%;
      text-align: center;
      padding:16px 0;
      position: relative;
      &.selected::after{  //用&. 等于是被包含在li面 替换了  >li .selected
        /* border-bottom: 10px solid #333; */
        content:"";
        display:block;
        height:3px;
        background:#333;
        position:absolute;
        bottom:0;
        width:100%;  //使用绝对定位后, 需要给宽度, 否则没有宽度
        left:0;
      }
    }
  }
`;

export {CategorySection}
