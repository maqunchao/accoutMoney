import React, { useState } from "react";
import { creatId } from "./lib/creatId";

//写在外面防止 每次调用useTags 都初始化， 导致creatId 自增
let defaultTags = [
  { id: creatId(), name: "衣" },
  { id: creatId(), name: "食" },
  { id: creatId(), name: "住" },
  { id: creatId(), name: "行" },
];

//封装一个自定义的Hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];

  //需要导出一个对象
  return {
    tags,
    setTags,
    findTag,
  };
};

export { useTags };
