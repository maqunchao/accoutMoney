import styled from "styled-components";
import React, { useState } from "react";
import { useTags } from "useTags";
import { creatId } from "../../lib/creatId";
const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
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
      &.selected {
        background: red;
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

type Props = {
  // value: string[];
  value: number[];
  onChange: (selected: number[]) => void;
};

// const X:React.FC = ()...
// X的类型是一个react函数组件
// const X:React:FC<Props> = ()...
// X的类型是一个接受Props的React函数组件

const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  // const [tags, setTags] = useState<string[]>(["衣", "食", "住"]);
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt("新增标签");
    if (tagName !== null) {
      setTags([...tags, { id: creatId(), name: tagName }]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      //如果tag已被选择, 则筛选出其他没被选中的tag, 复制一份当做新的selectedTag
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  //抽取className, 做选中处理
  const getClass = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
  };

  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              onToggleTag(tag.id);
            }}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };
