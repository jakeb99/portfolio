import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <Navbar />
      <main className="flex-grow bg-gray-900">
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
