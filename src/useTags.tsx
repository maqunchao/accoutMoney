import React, { useState } from "react";
import { Tag } from "views/tag";
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

  const findTagIndex = (id: number) => {
    //防止找不到id， result变成tags.length
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        console.log("i", i);
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    // //找到需要更改的tag的下标
    // const index = findTagIndex(id);
    // //拷贝一份， react抢到不可变数据， tags和newtags是不同的， 否则只修改原来的tags， 会认为没有变化
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // //splice修改原数组
    // tagsClone.splice(index, 1, { id: id, name: obj.name });
    // setTags(tagsClone);

    setTags(tags.map((tag) => (tag.id === id ? { id, name: obj.name } : tag)));
  };

  const deleteTag = (id: number) => {
    // //找到需要更改的tag的下标
    // const index = findTagIndex(id);

    // //拷贝一份， react抢到不可变数据， tags和newtags是不同的， 否则只修改原来的tags， 会认为没有变化
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // //splice修改原数组
    // tagsClone.splice(index, 1);
    // setTags(tagsClone);

    //filter会返回一个新的数组
    setTags(tags.filter((tag) => tag.id !== id));
  };

  //需要导出一个对象
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag,
  };
};

export { useTags };
