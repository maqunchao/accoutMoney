import React, { useState, ReactNode } from "react";
import Layout from "components/Layout";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import { RecordItem, UseRecord } from "../hooks/useRecord";
import { useTags } from "hooks/useTags";
import day from "dayjs";

//统计页面每行的样式
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const CategoryWrapper = styled.div`
  background: white;
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = UseRecord();
  const { getName } = useTags();
  const hash: { [K: string]: RecordItem[] } = {}; // {'2020-05-11': [item, item], '2020-05-10': [item, item], '2020-05-12': [item, item, item, item]}
  //让'-' '+' 与列表数据绑定
  const selectedRecords = records.filter((r) => r.category === category);

  //创建数组， 日期相同的放到一组
  selectedRecords.map((r) => {
    const key = day(r.createdAt).format("YYYY年MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  //实现上下排序，
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        ></CategorySection>
      </CategoryWrapper>
      <div>
        {
          // 析构赋值数组第一项是日期， 第二项是列表数据
          array.map(([date, records]) => {
            return (
              <div>
                <Header>{date}</Header>
                {records.map((r) => {
                  return (
                    <Item>
                      <div className="tags oneLine">
                        {r.tagIds.map((tagId) => (
                          <span>{getName(tagId)}</span>
                        ))}
                      </div>
                      {r.note && <div className="note">{r.note}</div>}
                      <div className="amount">¥{r.amount}</div>
                    </Item>
                  );
                })}
              </div>
            );
          })
        }
      </div>
    </Layout>
  );
}

export default Statistics;
