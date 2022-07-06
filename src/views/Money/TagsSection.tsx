import styled from "styled-components";
import React, { useState } from "react";

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
};

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1; //如果有空间, 就给该标签尽可能高的高度
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background:red;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props2 = {
  children: any;
};

const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt("新增标签");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      //如果tag已被选择, 则筛选出其他没被选中的tag, 复制一份当做新的selectedTag
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => {
              onToggleTag(tag);
            }}
            className={
              selectedTags.indexOf(tag) >= 0 ? "selected" : ""
            }
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };
