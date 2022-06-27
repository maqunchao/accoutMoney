import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;


// type Props = {
//   title: string;
// };

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>
        <h2>{props.children}</h2>;
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;
