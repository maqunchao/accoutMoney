import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>;
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>;
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>;
    </Layout>
  );
}

export default App;
