import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Workers from "./components/Workers/Workers";

function App() {
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/workers" element={<Workers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
