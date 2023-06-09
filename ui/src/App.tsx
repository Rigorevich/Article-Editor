import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";
import Article from "./pages/Article";

import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
    </>
  );
};

export default App;
