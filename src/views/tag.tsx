import React from "react";
import { useTags } from "useTags";
import { useParams } from "react-router-dom";

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
  return <div>{tag.name}</div>;
};

export { Tag };
