import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #ffffff;
`;
const NoteSection = styled.section``;

const CategorySection = styled.section``;

const NumberPadSection = styled.section``;
const TagList = styled.ol`
  > li {
  }
`;

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <TagList>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </TagList>
        <button>新增标签</button>
      </TagsSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;
