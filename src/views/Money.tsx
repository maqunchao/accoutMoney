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
    tags: [] as string[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });
  return (
    <MyLayout>
      {selected.tags.join("")}
      {selected.note}
      <TagsSection
        value={selected.tags}
        onChange={(tags) =>
          setSelected({
            ...selected,
            tags: tags,
          })
        }
      />
      <NoteSection
        value={selected.note}
        onChange={(note) =>
          setSelected({
            ...selected,
            note: note,
          })
        }
      />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Money;
