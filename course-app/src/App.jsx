import Homepage from './components/Homepage';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Project1 from './project/project_1/Project1';

export default function App() {
  return (
    <Routes>
      <Route path="/Hunter_CS135_Summer23" element={<Homepage/>}/>
      <Route path="/Hunter_CS135_Summer23/Project_1" element={<Project1/>}/>
    </Routes> 
  )
}
