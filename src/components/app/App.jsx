import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CharacterPage from '../../pages/CharacterPage';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import Header from './Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterPage />}/>
        <Route path="/detail/:id" element={<CharacterDetail />}/>
      </Routes>
    </Router>
  );
}
