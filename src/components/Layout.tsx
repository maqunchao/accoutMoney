import React from "react";
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



// type Props = {
//   title: string;
// };

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;
