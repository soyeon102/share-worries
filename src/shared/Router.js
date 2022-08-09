import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
import DetailPage from '../components/pages/DetailPage';
import WritingPage from '../components/pages/WritingPage';
import ListPage from '../components/pages/ListPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail/:id' element={<DetailPage />} />
        <Route path='/writing' element={<WritingPage />} />
        <Route path='/list' element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
