import React, { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住"]);
  //需要导出一个对象
  return {
    tags,
    setTags,
  };
};

export { useTags };
