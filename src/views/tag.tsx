import React from "react";
import { useTags } from "useTags";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import styled from "styled-components";
import Icon from "components/Icon";

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #767676;
  border-radius: 4px;
  color: white;
`;

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

type Params = {
  id: string;
};

const Tag: React.FC = () => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  // console.log("useParams", useParams());
  // let a = useParams().id;
  // console.log("id", a);

  // const tag = tags.filter((tag) => tag.id === parseInt(id!))[0];
  const tag = findTag(parseInt(id!));
  return (
    <Layout>
      {/* <div>{tag.name}</div> */}
      <TopBar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export { Tag };
