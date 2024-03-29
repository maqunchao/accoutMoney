import React, { ReactNode, useEffect, useRef } from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid #fff;
  flex-grow: 1;
  overflow: auto;
`;

type Props = {
  className?: string;
  scrollTop?: number;
  children?: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {
        return;
      }
      console.log(props.scrollTop);
      mainRef.current.scrollTop = props.scrollTop!;
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main className={props.className}>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
};
//设置属性的默认值
Layout.defaultProps = {
  scrollTop: 0,
};

export default Layout;
