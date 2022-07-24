import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";

//单独设置money页面高度样式
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

type Category = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });

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

  const submit = () => {};

  return (
    <MyLayout>
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
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={() => {}}
      />
    </MyLayout>
  );
}

export default Money;
