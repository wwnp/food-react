
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
ReactDOM.render(
  <ContexProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='categories/:categories' element={<SingleCategory />} />
          <Route path='categories/:categories/:food' element={<SingleFood />} />
          <Route path='*' element={<Notfound />} />
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </ContexProvider>
  ,
  document.getElementById('root')
);