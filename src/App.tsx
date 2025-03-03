import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import JohnDoe from './page/Jonh_Doe/JohnDoe';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/john-doe" element={<JohnDoe />} />
      </Routes>

    </Router>
  );
};

export default App;
