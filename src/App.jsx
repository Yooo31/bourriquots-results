import './styles/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import RankingPage from './pages/RankingPage';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/ranking" element={<RankingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
