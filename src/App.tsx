import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

 function App() {
  return (
    <HashRouter>
    <nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </nav>
        {/* path="/tags" */}
    <Routes>
      <Route path="/tags"  element={<Tags />}/>
      <Route path="/money" element={<Money />}/>
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
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}



export default App;
