import './styles/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importez les autres pages ici (Calendar, Ranking)
import CalendarPage from './pages/CalendarPage'; // Importez les autres pages ici (Calendar, Ranking)
import RankingPage from './pages/RankingPage'; // Importez les autres pages ici (Calendar, Ranking)

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
