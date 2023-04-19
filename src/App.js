
import './App.css';
import ProjectPage from './pages/ProjectPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'> 
          <Route index element={<ProjectPage/>} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
