import React from "react";
import { HashRouter, Routes, Route,  Navigate } from "react-router-dom";
import styled from "styled-components";
import Nav from 'components/Nav';

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



function App() {
  return (
    <HashRouter>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/tags" element={<Tags />} />
            <Route path="/money" element={<Money />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/" element={<Navigate to="/money" replace />} />
            {/* 👇️ only match this when no other routes match */}
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found</h2>
                </div>
              }
            />
          </Routes>
        </Main>
        <Nav/>
      </Wrapper>
    </HashRouter>
  );
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

export default App;
