import React from "react";
import Layout from "components/Layout";
import { useTags } from "../useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import { Link } from "react-router-dom";
import "../helper.scss";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      color: #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #767676;
  border-radius: 4px;
  color: white;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  height: 16px;
`;

function Tags() {
  const { tags } = useTags();
  return (
    <Layout>
      <TagList>
        {/* {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))} */}
        {tags.map((tag) => {
          return (
            <li key={tag.id}>
              <Link to={"/tags/" + tag.id}>
                <span className="oneLine">{tag.name}</span>
                <Icon name="right" />
              </Link>
            </li>
          );
        })}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
