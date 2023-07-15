import Homepage from './components/Homepage';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Project1 from './project/project_1/Project1';
import Project2 from './project/project_2/Project2';
import Project3 from './project/project_3/Project3';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Project_1" element={<Project1/>}/>
      <Route path="/Project_2" element={<Project2/>}/>
      <Route path="/Project_3" element={<Project3/>}/>
    </Routes> 
  )
}
