import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { TagsSection } from "./Money/TagsSection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { types } from "@babel/core";

//单独设置money页面高度样式
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

type Category = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
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

  return (
    <MyLayout>
      {selected.tags.join("")}
      {selected.note}
      {selected.category}
      {selected.amount}
      <TagsSection
        value={selected.tags}
        onChange={(tags) => onChange({ tags })}
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
