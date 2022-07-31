import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { UseRecord } from "hooks/useRecord";

//单独设置money页面高度样式
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

type Category = "-" | "+";

const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const { records, addRecord } = UseRecord();

  //优化onChange
  // value={selected.note}
  //       onChange={(note) =>
  //         setSelected({
  //           ...selected,
  //           note: note,
  //         })

  //obj是Selected的一部分

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };

  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功");
      //保存成功后, 重置money页面数据
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout scrollTop={2000}>
      {/* {selected.tags.join("")}
      {selected.note}
      {selected.category} */}
      {/* {selected.amount} */}
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => onChange({ category })}
        />
      </CategoryWrapper>

      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={submit}
      />
    </MyLayout>
  );
}

export default Money;
