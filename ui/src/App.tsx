import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";

import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
    </>
  );
};

export default App;
