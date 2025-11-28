import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProjectsPage } from './components/ProjectsPage';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
