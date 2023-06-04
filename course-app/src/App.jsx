import './index.css'
import Navbar from './components/Navbar'
import Schedule from './components/Schedule'
import Faq from './components/Faq'
import Info from './components/Info'
import { faqData } from './faqData'
import { deadlinesData } from './deadlinesData'
import { homeworksData } from './homeworksData'

export default function App() {
  return (
    <div>
      <Navbar homeworks={homeworksData}/>
      <div className=" flex flex-col justify-center items-center">
        <Info assignments={ deadlinesData }/>
        <div className="border-solid border border-black w-10/12 mt-5 p-5 text-xl font-mono text-center font-bold">Class Schedule</div>
        <Schedule/>
        <div className="border-solid border-2 border-black bg-black w-10/12 mt-10 p-5 text-xl text-white font-mono font-bold">Frequently Asked Questions</div>
        <div className="w-10/12">
          {faqData.map((section, index) => (
            <Faq key={index} section={section}/>
          ))}
        </div>
      </div>
      <footer className='bg-gray-700 text-white text-center w-full font-mono p-5 mt-10'>
        This website was made using  and <a className="text-blue-400" href="https://react.dev/">ReactJS</a> and <a className="text-blue-400" href='https://tailwindcss.com/'>Tailwind-CSS</a>.
      </footer>
    </div>
  )
}
