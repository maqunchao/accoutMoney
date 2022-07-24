import { UseUpdate } from "hooks/useUpdate";
import { type } from "os";
import React, { useState, useEffect } from "react";
import { Tag } from "views/tag";
import { creatId } from "../lib/creatId";

type Item = {
  id: number;
  name: string;
};

//写在外面防止 每次调用useTags 都初始化， 导致creatId 自增

//封装一个自定义的Hook
const useTags = () => {
  const [tags, setTags] = useState<Item[]>([]);

  //didmount
  useEffect(() => {
    console.log("after");
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");

    //假如为空的时候 才初始化赋值
    if (localTags.length === 0) {
      localTags = [
        { id: creatId(), name: "衣" },
        { id: creatId(), name: "食" },
        { id: creatId(), name: "住" },
        { id: creatId(), name: "行" },
      ];
    }
    setTags(localTags);
    console.log("getItem");
  }, []);
  //监听tags的改变
  // useEffect(() => {
  //   console.log("tags改变", tags);

  //   window.localStorage.setItem("tags", JSON.stringify(tags));
  //   console.log("setItem");
  // }, [tags]);

  UseUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

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
  const addTag = () => {
    const tagName = window.prompt("新增标签");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: creatId(), name: tagName }]);
    }
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
    addTag,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag,
  };
};

export { useTags };
