import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import NoMathch from "views/NoMathch";

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
          element={<NoMathch />}
        />
      </Routes>
    </HashRouter>
  );
}



export default App;
