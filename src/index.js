
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './pages/Home';
import { App } from './App';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { ContexProvider } from './contex';
import { Notfound } from './pages/Notfound';
import "materialize-css/dist/css/materialize.min.css";
import './index.css';
import { SingleCategory } from './pages/SingleCategory';
import { SingleFood } from './pages/SingleFood';
import { RandomPage } from './pages/RandomPage';
ReactDOM.render(
  <ContexProvider>
    <BrowserRouter basename='/food-react'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='categories/:name' element={<SingleCategory />} />
          <Route path='categories/:categories/:foodId' element={<SingleFood />} />
          <Route path='/random' element={<RandomPage />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ContexProvider>
  ,
  document.getElementById('root')
);