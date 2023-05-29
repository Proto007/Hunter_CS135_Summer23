import './index.css'
import Navbar from './components/Navbar'
import Schedule from './components/Schedule'

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center items-center">
        <Schedule/>
      </div>
      
    </div>
  )
}
