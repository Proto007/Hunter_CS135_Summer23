import './index.css'
import Navbar from './components/Navbar'
import Schedule from './components/Schedule'
import Faq from './components/Faq'
import Info from './components/Info'
import { faqdata } from './faqdata'
import { deadlinesdata } from './deadlinesdata'

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className=" flex flex-col justify-center items-center">
        <Info assignments={ deadlinesdata }/>
        <div className="border-solid border border-black w-10/12 mt-5 p-5 text-xl font-mono text-center font-bold">Class Schedule</div>
        <Schedule/>
        <div className="border-solid border-2 border-black bg-black w-10/12 mt-5 p-5 text-xl text-white font-mono font-bold">Frequently Asked Questions</div>
        <div className="w-10/12">
          {faqdata.map((section, index) => (
            <Faq key={index} section={section}/>
          ))}
        </div>
      </div>
    </div>
  )
}
