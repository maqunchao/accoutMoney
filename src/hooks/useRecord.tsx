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
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);

  UseUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {};

  return { records };
};

export { UseRecord };
