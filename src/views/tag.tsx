import React from "react";
import { useTags } from "useTags";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import styled from "styled-components";
import Icon from "components/Icon";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Center, Space } from "components/Center";

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
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
      <InputWrapper>
        <Input label="标签名" value={tag.name} />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export { Tag };
