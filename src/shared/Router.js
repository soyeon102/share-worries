import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import WritingPage from "../pages/WritingPage";
import ListPage from "../pages/ListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
