import React from "react";
import { useTags } from "hooks/useTags";
import { useParams, useNavigate } from "react-router-dom";
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
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<Params>();
  // console.log("useParams", useParams());
  // let a = useParams().id;
  // console.log("id", a);

  // const tag = tags.filter((tag) => tag.id === parseInt(id!))[0];
  const tag = findTag(parseInt(idString!));

  const tagContent = (tag: { id: number; name: string }) => {
    return (
      <div>
        <InputWrapper>
          <Input
            label="标签名"
            type="text"
            value={tag.name}
            placeholder="标签页"
            onChange={(e) => {
              // tag.name = e.target.name;
              updateTag(tag.id, { name: e.target.name });
            }}
          />
        </InputWrapper>
        <Center>
          <Space />
          <Space />
          <Space />
          <Button
            onClick={() => {
              console.log("删除按钮");
              deleteTag(tag.id);
            }}
          >
            删除标签
          </Button>
        </Center>
      </div>
    );
  };
  const history = useNavigate();
  const onClickBack = () => {
    console.log("123");
    // window.history.back();
    history(-1);
  };
  return (
    <Layout>
      {/* <div>{tag.name}</div> */}
      <TopBar>
        <Icon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      {tag ? tagContent(tag) : <div>tag不存在</div>}
    </Layout>
  );
};

export { Tag };
