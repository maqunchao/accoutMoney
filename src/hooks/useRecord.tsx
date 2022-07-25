import React, { useEffect, useState } from "react";
import { UseUpdate } from "./useUpdate";

type RecordItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
  createdAt: string; //ISO 8601
};

//Omit是从 RecordItem中剔除createdAt属性
type newRecordItem = Omit<RecordItem, "createdAt">;

const UseRecord = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  //初始化赋值
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);

  //每次更新都存到localStorage中
  UseUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  //添加新的
  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert("请输出金额");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }
    //获取到最新的更改的数组
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    //然后重新set进去
    setRecords([...records, record]);
    return true;
  };

  return { records, addRecord };
};

export { UseRecord };
